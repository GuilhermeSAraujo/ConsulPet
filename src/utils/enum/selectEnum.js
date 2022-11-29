const porte = [
	{
		nome: 'Pequeno',
		valor: 'small',
	},
	{
		nome: 'Médio',
		valor: 'medium',
	},
	{
		nome: 'Grande',
		valor: 'large',
	},
];

const encontraPorte = (valor, nome) => {
	if (valor) return porte.find((p) => p.valor === valor);
	if (nome) return porte.find((p) => p.nome === nome);
	return null;
};

const servico = [
	{
		nome: 'Consulta veterinária',
		valor: 1,
	},
	{
		nome: 'Serviços estéticos',
		valor: 2,
	},
	{
		nome: 'Hospedagem',
		valor: 3,
	},
];

const encontraServico = (valor, nome) => {
	if (valor) return servico.find((p) => p.valor === valor);
	if (nome) return servico.find((p) => p.nome === nome);
	return null;
};

const tamanhos = {
	small: 'Pequeno',
	medium: 'Médio',
	large: 'Grande',
};

const status = {
	pending: 'Pendente',
	confirmed: 'Confirmada',
};

export { porte, encontraPorte, servico, encontraServico, tamanhos, status };
