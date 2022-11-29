import { useState } from 'react';
import { Grid,Box, Typography, Divider } from '@mui/material';
import { useQuery } from 'react-query';
import AgendamentoService from './service/ScheduleService';
import dayjs from 'dayjs';
import { status } from '../../../utils/enum/selectEnum';

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

	const ordenaPorData = (lista) => {
		lista.sort(function (a, b) {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		});
		let dias = [];
		lista.forEach((data) => {
			let apenasData = data.date.split(' ')[0];
			if (!dias.includes(apenasData)) {
				dias.push(apenasData);
			}
		});
		return dias;
	};

	return (
		<Grid container>
			{agendamentos && agendamentos.length > 0 ? (
				ordenaPorData(agendamentos).map((agendamento, i) => (
					<Grid item xs={12} key={i * 10} marginBottom={5}>
						{dayjs().format('DD/MM/YYYY') ===
						dayjs(agendamento).format('DD/MM/YYYY') ? (
							<Typography
								sx={{ display: 'inline-flex', marginRight: '10px' }}
								fontWeight={500}
								variant="h5"
							>
								Hoje -
							</Typography>
						) : (
							<></>
						)}
						<Typography sx={{ display: 'inline-flex' }} variant="h5">
							{dayjs(agendamento).format('DD/MM/YYYY')}
						</Typography>
						<Divider />
						{agendamentos.map((a, i) => {
							if (a.date.split(' ')[0] == agendamento) {
								return (
									<Box key={i * 100}>
										<Typography variant="body1" display='inline-flex' pr={2}>
											{dayjs(a.date).format('HH:mm')}
										</Typography>
										<Typography variant="body1" display='inline-flex' pr={2}>
											{status[a.status]}
										</Typography>
										<Typography variant="body1" display='inline-flex' pr={2}>
											{a.pet.name}
										</Typography>
										{a.vet && a.vet.name ?}
									</Box>
								);
							} else {
								return null;
							}
						})}
					</Grid>
				))
			) : (
				<h3>Carregando...</h3>
			)}
		</Grid>
	);
};

export default Agendamentos;
