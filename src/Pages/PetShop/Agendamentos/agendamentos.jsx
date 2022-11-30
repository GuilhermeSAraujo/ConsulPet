import { useState } from 'react';
import {
	Grid,
	Box,
	Typography,
	Divider,
	useTheme,
	Container,
	CssBaseline,
	Stack,
	Modal,
} from '@mui/material';
import { useQuery } from 'react-query';
import AgendamentoService from './service/ScheduleService';
import dayjs from 'dayjs';
import { status } from '../../../utils/enum/selectEnum';
import ModalAgendamento from './components/modalAgendamento';

const Agendamentos = () => {
	const [loading, setLoading] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);
	const [agendamentoModal, setAgendamentoModal] = useState({});

	const theme = useTheme();
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
		<Container component="main" maxWidth="md" bc={theme.palette.primary.main}>
			<CssBaseline />
			<Grid container mt={3} textAlign="center">
				<Modal
					open={modalOpen}
					onClose={() => setModalOpen(false)}
					sx={{ border: '1px solid white', borderRadius: '10px' }}
				>
					<ModalAgendamento agendamento={agendamentoModal} />
				</Modal>
				{agendamentos && agendamentos.length > 0 ? (
					ordenaPorData(agendamentos).map((agendamento, i) => (
						// <Grid item xs={12} key={i * 10} marginBottom={5}>
						<Box width="100%" mb="30px" key={i}>
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
							<Stack direction="row">
								{agendamentos.map((a, i) => {
									if (a.date.split(' ')[0] == agendamento) {
										console.log(a);
										return (
											// <Grid key={i + 200} item xs={3} sm={3} md={3} lg={3} >
											<>
												<Box
													key={i * 100}
													sx={{
														border: '1px solid white',
														borderRadius: '10px',
														width: '32%',
														marginInline: 'auto',
														marginTop: 2,
														backgroundColor: theme.palette.primary.light,
													}}
													onClick={() => {
														setAgendamentoModal(a);
														setModalOpen(true);
													}}
												>
													<Typography variant="body1">
														{dayjs(a.date).format('HH:mm')}
													</Typography>
													<Typography variant="body1">{status[a.status]}</Typography>
													<Typography variant="body1">{a.pet.name}</Typography>
													{a.vet ? (
														<Typography variant="body1">Consulta</Typography>
													) : (
														<Typography variant="body1">Banho e tosa</Typography>
													)}
												</Box>
											</>
										);
									} else {
										return null;
									}
								})}
							</Stack>
						</Box>
					))
				) : (
					<h3>Carregando...</h3>
				)}
			</Grid>
		</Container>
	);
};

export default Agendamentos;
