# HC Conecta - Sistema Hospitalar Inteligente

Sistema hospitalar inteligente com interface moderna e responsiva, desenvolvido como MVP para gestão de pacientes e equipe médica.

## 🏥 Características Principais

- **Interface Responsiva**: Adaptável para desktop, tablet e mobile
- **Design System Moderno**: Cores e tipografia otimizadas para ambiente hospitalar
- **Check-in Inteligente**: Sistema de entrada de pacientes com validação
- **Painel da Equipe**: Monitoramento em tempo real do status dos pacientes
- **Monitoramento de Sinais Vitais**: Dados de saúde em tempo real
- **Sistema de Agendamentos**: Cadastro descentralizado de exames
- **Histórico Completo**: Timeline de atividades dos pacientes

## 🎨 Melhorias Implementadas

### Design System
- **Cores Hospitalares**: Esquema de cores profissional com azul médico e verde de saúde
- **Tipografia Roboto**: Fonte moderna e legível para interfaces médicas
- **Ícones Font Awesome**: Ícones médicos para melhor UX
- **Gradientes e Sombras**: Efeitos visuais modernos e profissionais

### Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Grid Layout**: Sistema de grid responsivo para diferentes telas
- **Media Queries**: Breakpoints para tablet (768px) e mobile (480px)
- **Touch Friendly**: Botões e elementos otimizados para toque

### Componentes
- **Cartões Interativos**: Hover effects e animações suaves
- **Formulários Modernos**: Inputs com foco visual e validação
- **Timeline Visual**: Linha do tempo com indicadores visuais
- **Status Badges**: Indicadores coloridos para status dos pacientes

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Variáveis CSS, Grid, Flexbox, Animações
- **JavaScript**: Lógica de negócio e interatividade
- **Font Awesome 6.4.0**: Ícones médicos e de interface
- **Google Fonts**: Tipografia Roboto otimizada

## 📱 Responsividade

### Desktop (>1200px)
- Layout em grid com múltiplas colunas
- Navegação horizontal completa
- Cartões em grid responsivo

### Tablet (768px - 1200px)
- Grid adaptativo
- Botões de navegação otimizados
- Layout em coluna única para cartões

### Mobile (<768px)
- Layout em coluna única
- Botões de navegação empilhados
- Formulários otimizados para toque
- Tipografia redimensionada

## 🎯 Funcionalidades

### 1. Check-in Inteligente
- Formulário com validação
- Ícones médicos para cada campo
- Feedback visual imediato
- Redirecionamento para guia do paciente

### 2. Painel da Equipe
- Grid de cartões de pacientes
- Status em tempo real (Aguardando, Em Atendimento, Concluído)
- Timeline de atividades
- Detalhes completos do paciente

### 3. Monitoramento de Sinais Vitais
- Dados simulados em tempo real
- Cartões com métricas visuais
- Indicadores de saúde coloridos
- Atualização automática

### 4. Sistema de Agendamentos
- Cadastro descentralizado de exames
- Validação de CPF do paciente
- Confirmação visual de sucesso
- Integração com timeline

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary-color: #2563eb;      /* Azul médico */
--secondary-color: #059669;    /* Verde saúde */
--accent-color: #dc2626;       /* Vermelho urgência */

/* Status */
--status-waiting: #f59e0b;     /* Amarelo aguardando */
--status-in-service: #3b82f6; /* Azul em atendimento */
--status-done: #10b981;        /* Verde concluído */
```

## 📁 Estrutura do Projeto

```
hcconectafrontclone/
├── assets/
│   └── css/
│       ├── global/
│       │   ├── elements.css      # Componentes e layout
│       │   ├── fonts.css         # Configuração de fontes
│       │   ├── global.css        # Importações
│       │   ├── normalize.css     # Reset CSS
│       │   └── variables.css     # Design tokens
│       └── pages/
│           └── index/
│               └── index.css     # Estilos específicos
├── index.html                    # Página principal
├── LICENSE
└── README.md
```

## 🚀 Como Usar

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd hcconectafrontclone
   ```

2. **Abra o arquivo index.html**
   - Navegador moderno (Chrome, Firefox, Safari, Edge)
   - Servidor local recomendado para melhor performance

3. **Teste as funcionalidades**
   - Check-in de pacientes
   - Navegação entre seções
   - Responsividade em diferentes dispositivos

## 🔧 Desenvolvimento

### Estrutura CSS
- **Variáveis CSS**: Design tokens centralizados
- **Componentes Modulares**: Estilos reutilizáveis
- **Mobile First**: Desenvolvimento responsivo
- **Performance**: CSS otimizado e minificado

### JavaScript
- **Vanilla JS**: Sem dependências externas
- **Modular**: Funções organizadas por funcionalidade
- **Performance**: Event listeners otimizados
- **Simulação**: Dados mockados para demonstração

## 📱 Testes de Responsividade

- **iPhone SE**: 375px (Mobile)
- **iPad**: 768px (Tablet)
- **Desktop**: 1200px+ (Desktop)
- **4K**: 2560px+ (Large Desktop)

## 🎯 Próximos Passos

- [ ] Integração com API real
- [ ] Autenticação de usuários
- [ ] Notificações em tempo real
- [ ] Dashboard analytics
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
