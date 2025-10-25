const patients = [
  {
    nome: "Maria dos Santos",
    cpf: "123.456.789-00",
    status: "aguardando",
    setor: "Cardiologia",
    hora: "10:00",
    historico: [
      { data: "20/10/2025", tipo: "Consulta", detalhe: "Cardiologia" },
      { data: "18/10/2025", tipo: "Exame", detalhe: "Eletrocardiograma" }
    ],
    sinais: { bpm: 78, temp: 36.8 }
  },
  {
    nome: "João Lima",
    cpf: "987.654.321-00",
    status: "em-atendimento",
    setor: "Dermatologia",
    hora: "09:30",
    historico: [
      { data: "10/09/2025", tipo: "Consulta", detalhe: "Retorno" }
    ],
    sinais: { bpm: 82, temp: 37.1 }
  },
  {
    nome: "Ana Costa",
    cpf: "321.654.987-00",
    status: "concluido",
    setor: "Pediatria",
    hora: "08:00",
    historico: [
      { data: "05/10/2025", tipo: "Consulta", detalhe: "Rotina infantil" }
    ],
    sinais: { bpm: 90, temp: 36.5 }
  }
];

const list = document.getElementById('patientsList');
const detail = document.getElementById('patientDetail');
const detailContent = document.getElementById('detailContent');

function renderList() {
  list.innerHTML = "";
  const term = document.getElementById('search').value.toLowerCase();
  const statusFilter = document.getElementById('statusFilter').value;
  
  patients
    .filter(p => 
      (statusFilter === "all" || p.status === statusFilter) &&
      p.nome.toLowerCase().includes(term)
    )
    .forEach(p => {
      const card = document.createElement('div');
      card.className = "card";
      card.innerHTML = `
        <div class="name">${p.nome}</div>
        <div class="status">${p.setor} — ${p.hora}</div>
        <span class="badge ${p.status}">${p.status.replace("-", " ")}</span>
      `;
      card.onclick = () => showDetail(p);
      list.appendChild(card);
    });
}

function showDetail(p) {
  list.style.display = "none";
  detail.style.display = "block";
  detailContent.innerHTML = `
    <h2>${p.nome}</h2>
    <p><strong>CPF:</strong> ${p.cpf}</p>
    <p><strong>Setor:</strong> ${p.setor}</p>
    <p><strong>Status:</strong> <span class="badge ${p.status}">${p.status}</span></p>

    <h3>Histórico</h3>
    <table class="table">
      <tr><th>Data</th><th>Tipo</th><th>Detalhe</th></tr>
      ${p.historico.map(h => `
        <tr><td>${h.data}</td><td>${h.tipo}</td><td>${h.detalhe}</td></tr>
      `).join("")}
    </table>

    <h3>Sinais Vitais (Simulados)</h3>
    <p>Batimentos: <strong>${p.sinais.bpm} bpm</strong></p>
    <p>Temperatura: <strong>${p.sinais.temp} °C</strong></p>

    <div style="margin-top:10px;">
      <button onclick="atualizarStatus('${p.cpf}', 'em-atendimento')" class="btn-blue">Marcar 'Em atendimento'</button>
      <button onclick="atualizarStatus('${p.cpf}', 'concluido')" class="btn-green">Concluir atendimento</button>
    </div>
  `;
}

function backToList() {
  detail.style.display = "none";
  list.style.display = "grid";
  renderList();
}

function atualizarStatus(cpf, novo) {
  const p = patients.find(x => x.cpf === cpf);
  if (!p) return;
  p.status = novo;
  alert(`Status de ${p.nome} atualizado para ${novo}`);
  backToList();
}

/* Estilo de botões simples */
const style = document.createElement('style');
style.textContent = `
  .btn-blue, .btn-green {
    padding: 8px 14px;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    margin-right: 8px;
  }
  .btn-blue { background: var(--blue); }
  .btn-green { background: var(--green); }
`;
document.head.appendChild(style);

document.getElementById('search').addEventListener('input', renderList);
document.getElementById('statusFilter').addEventListener('change', renderList);
renderList();

/*
  Integração futura:
  - Substituir 'patients' por GET /api/pacientes (AGHU middleware).
  - Atualizar status via PATCH /api/paciente/{id}/status.
  - Canal WebSocket para atualização em tempo real.
  - Campos adicionais: fila, sala, profissional responsável.
  - LGPD: ocultar CPF completo, exibir apenas dígitos finais.
*/
