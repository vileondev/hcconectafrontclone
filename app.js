const state = {
  patient: { name: 'Maria dos Santos', id: '123.456.789-00' },
  timeline: [
    { time: '08:00', label: 'Retirada de exames', done: true },
    { time: '10:00', label: 'Consulta Cardiologia', done: false },
    { time: '14:00', label: 'Exame de Imagem', done: false }
  ],
  history: [
    { type: 'Consulta', title: 'Consulta Cardiologia', date: '2025-10-20', status: 'Concluído', obs: 'Sem intercorrências' },
    { type: 'Exame', title: 'Eletrocardiograma', date: '2025-08-12', status: 'Em análise', obs: 'Resultados pendentes' }
  ],
  notifs: [
    { text: 'Seu exame foi registrado.', ago: '2 dias' },
    { text: 'Novo atendimento disponível.', ago: '1 hora' }
  ],
  vitals: { bpm: 78, temp: 36.8 }
};

function hideAllScreens() {
  document.querySelectorAll("section[id^='screen-']").forEach(el => el.style.display = 'none');
}

function navigateTo(screen) {
  hideAllScreens();
  document.getElementById(`screen-${screen}`).style.display = screen === 'checkin' ? 'flex' : 'block';
  if (screen === 'dashboard') renderDashboard();
  if (screen === 'history') renderHistory();
  if (screen === 'notifs') renderNotifs();
  if (screen === 'vitals') startVitalsSimulation();
}

document.getElementById('btnCheckin').addEventListener('click', async () => {
  const idVal = document.getElementById('inputId').value.trim();
  if (!idVal) return alert('Informe CPF ou CNS para prosseguir.');
  const btn = document.getElementById('btnCheckin');
  btn.disabled = true; btn.textContent = 'Verificando agendamento...';
  await new Promise(r => setTimeout(r, 900));
  state.patient.id = idVal;
  btn.textContent = 'Check-in confirmado';
  await new Promise(r => setTimeout(r, 600));
  btn.disabled = false; btn.textContent = 'Realizar Check-in';
  navigateTo('dashboard');
});

function renderDashboard() {
  document.getElementById('patientName').textContent = state.patient.name;
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';
  state.timeline.forEach(step => {
    const el = document.createElement('div');
    el.className = `step ${step.done ? 'done' : ''}`;
    el.innerHTML = `<strong>${step.time}</strong><p>${step.label}</p>`;
    timeline.appendChild(el);
  });
}

function renderHistory() {
  const list = document.getElementById('historyList');
  list.innerHTML = '';
  state.history.forEach(ev => {
    list.innerHTML += `
      <div class="event">
        <strong>${ev.title}</strong><br>
        <small>${ev.date} • ${ev.type}</small><br>
        <small>${ev.status}</small><br>
        <small>${ev.obs}</small>
      </div>`;
  });
}

function renderNotifs() {
  const list = document.getElementById('notifList');
  list.innerHTML = '';
  state.notifs.forEach(n => {
    list.innerHTML += `
      <div class="notif">
        <span>🔔</span>
        <div><strong>${n.text}</strong><br><small>${n.ago}</small></div>
      </div>`;
  });
}

document.getElementById('btnViewMap').addEventListener('click', () => navigateTo('map'));

function simulateArrive() {
  alert('Presença registrada (simulação). Em produção, enviar para API AGHU.');
}

let vitalsInterval = null;
function startVitalsSimulation() {
  renderVitals();
  if (vitalsInterval) clearInterval(vitalsInterval);
  vitalsInterval = setInterval(() => {
    state.vitals.bpm = 70 + Math.round(Math.random() * 16);
    state.vitals.temp = (36 + Math.random() * 1.2).toFixed(1);
    renderVitals();
  }, 3000);
}

function renderVitals() {
  document.getElementById('bpmValue').textContent = `${state.vitals.bpm} bpm`;
  document.getElementById('tempValue').textContent = `${state.vitals.temp} °C`;
  drawGraph();
}

function drawGraph() {
  const c = document.getElementById('vitalCanvas');
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath(); ctx.strokeStyle = '#4CAF50'; ctx.lineWidth = 2;
  for (let i = 0; i < 30; i++) {
    const x = (i / 30) * c.width;
    const y = c.height / 2 + Math.sin((i / 30) * 6 + Date.now() / 400) * 18;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();
}

navigateTo('checkin');
document.getElementById('openNotifs').addEventListener('click', () => navigateTo('notifs'));
