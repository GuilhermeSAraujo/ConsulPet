import {
	Grid,
	Avatar,
	Typography,
	useTheme,
	Container,
	CssBaseline,
	TextField,
	Box,
	Stack,
	MenuItem,
	Snackbar,
	Alert,
	FormControlLabel,
	RadioGroup,
	Radio,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AlertaErroForm from '../../shared/components/erroForm';
import PetsIcon from '@mui/icons-material/Pets';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import StyledLoadingButton from '../../utils/components/LoadingButton';
import { porte } from '../../utils/enum/selectEnum';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TodayIcon from '@mui/icons-material/Today';
import { useForm, Controller } from 'react-hook-form';
import { useQuery, useQueries, useQueryClient } from 'react-query';
import AgendamentoService from './service/AgendamentoService';
import dayjs from 'dayjs';

function Home() {
	const theme = useTheme();
	const [loading, setLoading] = useState(true);
	const [toastIsOpen, setToastIsOpen] = useState({
		mensagem: '',
		isOpen: false,
		severity: 'success',
	});

	const { data: pets } = useQuery(
		'pets',
		async () => await AgendamentoService.buscaPets(),
		{ cacheTime: 600000, staleTime: 600000, onSuccess: () => setLoading(false) }
	);

	const { data: vets } = useQuery(
		'vets',
		async () => await AgendamentoService.buscaVeterinarios(),
		{
			cacheTime: 600000,
			staleTime: 600000,
			onSuccess: () => setLoading(false),
			onError: () => {
				setLoading(false);
				setToastIsOpen({
					mensagem: 'Ops! Ocorreu um erro interno.',
					isOpen: true,
					severity: 'error',
				});
			},
		}
	);

	const {
		handleSubmit,
		control,
		reset,
		formState: { errors, isDirty, isValid },
	} = useForm({
		defaultValues: { date: new Date(), pet_id: '', vet_id: '', service: '' },
		mode: 'onChange',
	});

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setToastIsOpen(false);
	};

	const queryClient = useQueryClient();
	const onSubmit = async (data) => {
		console.log(data);
		console.log({
			...data,
			date: dayjs(data.date).format('DD-MM-YYYY HH:mm'),
			client_id: localStorage.getItem('user_id'),
		});
		try {
			setLoading(true);
			await AgendamentoService.cadastraAgendamento({
				...data,
				date: dayjs(data.date).format('DD-MM-YYYY HH:mm'),
				client_id: localStorage.getItem('user_id'),
			});
			reset();
			queryClient.invalidateQueries({ queryKey: ['agendamentos'] });
			setToastIsOpen({
				mensagem: 'Sucesso! Seu agendamento foi cadastrado.',
				isOpen: true,
				severity: 'success',
			});
			setLoading(false);
		} catch (e) {
			setToastIsOpen({
				mensagem: 'Ops! Ocorreu um erro interno.',
				isOpen: true,
				severity: 'error',
			});
			setLoading(false);
		}
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
				<Snackbar
					open={toastIsOpen.isOpen}
					autoHideDuration={10000}
					onClose={handleClose}
				>
					<Alert
						onClose={handleClose}
						severity={toastIsOpen.severity}
						sx={{ width: '100%' }}
					>
						{toastIsOpen.mensagem}
					</Alert>
				</Snackbar>
				<Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
					<TodayIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Criar agendamento
				</Typography>
			</Box>
			<Grid container sx={{ placeContent: 'center' }}>
				<Box
					padding={2}
					sx={{
						mt: 1,
						backgroundColor: theme.palette.primary.light,
						borderRadius: '3%',
						border: '1px solid white',
						maxWidth: '280px',
					}}
				>
					{loading ? (
						<h3>Carregando...</h3>
					) : (
						<form id="cadastroPet">
							<Stack spacing={2}>
								<Grid item xs={12} sm={12} md={12} lg={12}>
									{pets && pets.length > 0 ? (
										<Controller
											name="pet_id"
											control={control}
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<TextField
													select
													fullWidth
													label="Pet"
													value={value}
													onChange={onChange}
													error={errors.pet_id}
													helperText={errors.pet_id?.message}
												>
													{pets.map((pet) => (
														<MenuItem key={pet.id} value={pet.id}>
															{pet.name}
														</MenuItem>
													))}
												</TextField>
											)}
										/>
									) : (
										<></>
									)}
									{errors.user_id && <AlertaErroForm textoErro="Campo obrigatório" />}
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={12}>
									<Controller
										name="date"
										control={control}
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value } }) => (
											<DateTimePicker
												label="Data e hora"
												ampm={false}
												value={value}
												inputFormat="DD/MM/YYYY HH:mm"
												onChange={onChange}
												renderInput={(params) => <TextField {...params} />}
											/>
										)}
									/>
									{errors.date && <AlertaErroForm textoErro="Campo obrigatório" />}
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={12}>
									{vets && vets.length > 0 ? (
										<Controller
											name="vet_id"
											control={control}
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<TextField
													select
													fullWidth
													label="Veterinário"
													value={value}
													onChange={onChange}
													error={errors.vet_id}
													helperText={errors.vet_id?.message}
												>
													{vets.map((vet) => (
														<MenuItem key={vet.id} value={vet.id}>
															{vet.user_account_details.name}
														</MenuItem>
													))}
												</TextField>
											)}
										/>
									) : (
										<></>
									)}
									{errors.user_id && <AlertaErroForm textoErro="Campo obrigatório" />}
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={12}>
									<Controller
										rules={{ required: true }}
										control={control}
										name="service"
										render={({ field }) => (
											<RadioGroup {...field}>
												<FormControlLabel
													value="veterinary"
													control={<Radio />}
													label="Consulta veterinária"
												/>
												<FormControlLabel
													value="aesthetic"
													control={<Radio />}
													label="Banho/Tosa"
												/>
											</RadioGroup>
										)}
									/>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
									<StyledLoadingButton
										onClick={handleSubmit(onSubmit)}
										loading={loading}
										loadingPosition="end"
										disabled={!isDirty || !isValid}
										fullWidth
										variant="contained"
										sx={{ mt: 3, mb: 2, color: theme.palette.primary.dark }}
										endIcon={<AddCircleIcon />}
									>
										Agendar
									</StyledLoadingButton>
								</Grid>
							</Stack>
						</form>
					)}
				</Box>
			</Grid>
		</Container>
	);
}

export default Home;
