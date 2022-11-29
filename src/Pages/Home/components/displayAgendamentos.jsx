import {
	Grid,
	Box,
	Container,
	CssBaseline,
	useTheme,
	Typography,
	Avatar,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CakeIcon from '@mui/icons-material/Cake';
import StraightenIcon from '@mui/icons-material/Straighten';
import { useQuery } from 'react-query';
import AgendamentoService from '../service/AgendamentoService';
import dayjs from 'dayjs';
import { status } from '../../../utils/enum/selectEnum';
import CheckIcon from '@mui/icons-material/Check';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HealingIcon from '@mui/icons-material/Healing';
import ContentCutIcon from '@mui/icons-material/ContentCut';

const DisplayAgendamentos = () => {
	const theme = useTheme();

	const { data: agendamentosCliente } = useQuery(
		'agendamentosCliente',
		async () => await AgendamentoService.buscaAgendamentos()
	);
	console.log(agendamentosCliente);
	const ordenaPorData = (lista) => {
		lista.sort(function (a, b) {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		});
		return lista;
	};

	return (
		<Container component="main" maxWidth="xs" bc={theme.palette.primary.main}>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 4,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
					<ScheduleIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Meus agendamentos
				</Typography>
			</Box>
			<Grid
				container
				sx={{
					placeContent: 'center',
				}}
			>
				<Box
					padding={0.5}
					sx={{
						mt: 1,
						backgroundColor: theme.palette.primary.light,
						borderRadius: '3%',
						border: '1px solid white',
						minWidth: { xs: '280px', md: '380px' },
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						paddingTop: 2,
					}}
				>
					{agendamentosCliente && agendamentosCliente.length > 0 ? (
						ordenaPorData(agendamentosCliente).map((agendamento, i) => (
							<Grid
								item
								key={i}
								xs={8}
								sm={8}
								md={5.6}
								lg={5.6}
								sx={{
									textAlign: 'center',
									border: '1px solid white',
									borderRadius: '16px',
									padding: 1,
									'&.MuiGrid-root': { marginBottom: 1 },
									maxHeight: '200px',
								}}
							>
								<Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
									<PetsIcon />
									<Typography ml={0.5} variant="body1">
										{agendamento.pet.name}
									</Typography>
								</Box>
								<Box
									sx={{ display: 'flex', justifyContent: 'center', mt: 0.5, mb: 0.5 }}
								>
									{status[agendamento.status] == 'Confirmada' ? (
										<CheckIcon />
									) : (
										<MoreHorizIcon />
									)}
									<Typography ml={0.5} variant="body1">
										{status[agendamento.status]}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
									<CalendarMonthIcon />
									<Typography ml={0.5} variant="body1">
										{dayjs(agendamento.date).format('DD/MM/YYYY HH:mm')}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
									{agendamento.vet ? <HealingIcon /> : <ContentCutIcon />}
									<Typography ml={0.5} variant="body1">
										{agendamento.vet ? 'Consulta' : 'Banho e tosa'}
									</Typography>
								</Box>
							</Grid>
						))
					) : (
						<Typography ml={0.5} variant="body1" textAlign="center">
							Você ainda não possui
							<br />
							nenhum agendamento cadastrado
						</Typography>
					)}
				</Box>
			</Grid>
		</Container>
	);
};

export default DisplayAgendamentos;
