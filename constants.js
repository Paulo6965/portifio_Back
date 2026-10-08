// Valores de dominio utilizados por models, controllers e views.

const STATUS ={
    aberto: { label: Aberto, cor: 'blue' },
    em_andamento: { label: 'Em andamento', cor: 'amber' },
    aguardando: { label: 'Aguardando usuario', cor: 'purple' },
    resolvido: { label: 'Resolvido', cor: 'green' },
    fechado: { label: 'Fechado', cor: 'gray' },
};

//Status considerados "em aberto" (ainda exigem ação da equipe).
const STATUS_ATIVO = ['aberto', 'em_andamento', 'aguardando'];

const PRIORIDADES = {
    baixa: {label: 'Baixa', cor: 'gray', peso: 1},
    media: {label: 'Media', cor: 'blue', peso: 2},
    alta: {label: 'Alta', cor: 'ember', peso: 3},
    critica: {label: 'Critica', cor: 'red', peso: 4},
};

const SETORES = [
    'Adminstrativo',
    'Comercial',
    'Diretoria',
    'Financeiro',
    'Operaçĩes',
    'Recursos Humanos',
    'TI',
];

module.exports = { STATUS, STATUS_ATIVOS, PRIORIDADES, SEROTES};