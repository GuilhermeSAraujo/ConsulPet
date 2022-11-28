import { useState } from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import { useQuery } from 'react-query';
import AgendamentoService from './service/ScheduleService';
import dayjs from 'dayjs';

const Agendamentos = () => {
	const [loading, setLoading] = useState(true);

	const { data: agendamentos } = useQuery(
		'agendamentos',
		async () => await AgendamentoService.buscaAgendamentos(),
		{
			cacheTime: 600000,
			staleTime: 600000,
			onSuccess: () => {
				setLoading(false);
			},
		}
	);

	const agrupaData = (agendamentos) => {
		return agendamentos.sort((a, b) => {
			console.log("🚀 ~ file: agendamentos.jsx ~ line 25 ~ returnagendamentos.sort ~ b", b.date)
			return new Date(b.date) - new Date(a.date);
		});
	};

	return (
		<Grid container>
			<Grid item xs={12}>
				{agendamentos && agendamentos.length > 0 ? agrupaData(agendamentos).map((agendamento) => (
					<h3 key={agendamento.id} >{dayjs(agendamento.date).format('DD-MM-YYYY HH:mm')}</h3>
				)) : <h3>Carregando...</h3>}
			</Grid>
		</Grid>
	);
};

export default Agendamentos;
