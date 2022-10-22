const porte = [
  {
    nome: 'Pequeno',
    valor: 1
  },
  {
    nome: 'Médio',
    valor: 2
  },
  {
    nome: 'Grande',
    valor: 3
  }
];
const encontraPorte = (valor, nome) => {
  if (valor) return porte.find((p) => p.valor === valor);
  if (nome) return porte.find((p) => p.nome === nome);
  return null;
};

const servico = [
  {
    nome: 'Consulta veterinária',
    valor: 1
  },
  {
    nome: 'Serviços estéticos',
    valor: 2
  },
  {
    nome: 'Hospedagem',
    valor: 3
  }
];
const encontraServico = (valor, nome) => {
  if (valor) return servico.find((p) => p.valor === valor);
  if (nome) return servico.find((p) => p.nome === nome);
  return null;
};

export {
  porte, encontraPorte, servico, encontraServico
};
