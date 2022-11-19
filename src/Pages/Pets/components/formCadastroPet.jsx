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
	InputAdornment,
	MenuItem,
	RadioGroup,
	FormControlLabel,
	Radio,
	Snackbar,
	Alert
} from '@mui/material';
import { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AlertaErroForm from '../../../shared/components/erroForm';
import PetsIcon from '@mui/icons-material/Pets';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import StyledLoadingButton from '../../../utils/components/LoadingButton';
import { porte } from '../../../utils/enum/selectEnum';
import PetsService from '../service/petsService';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useForm, Controller } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import dayjs from 'dayjs';

export default function FormCadastroPet() {
	const theme = useTheme();
	const [loading, setLoading] = useState(false);
	const [toastIsOpen, setToastIsOpen] = useState({ mensagem: "", isOpen: false, severity: 'success' });

	const {
		handleSubmit,
		control,
		reset,
		formState: { errors, isDirty, isValid },
	} = useForm({
		defaultValues: { name: '', birth_date: '01/01/2022', size: '' },
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
		console.log("teste1234", { ...data, birth_date: dayjs(data.birth_date).format('YYYY-MM-DD') })
		try {
			setLoading(true);
			await PetsService.cadastraPet({
				...data,
				birth_date: dayjs(data.birth_date).format('YYYY-MM-DD'),
				owner_id: localStorage.getItem('user_id')
			});
			reset();
			queryClient.invalidateQueries({ queryKey: ['pets'] });
			setToastIsOpen({ mensagem: 'Sucesso! Seu pet foi cadastrado.', isOpen: true, severity: 'success' });
			setLoading(false);
		} catch (e) {
			setToastIsOpen({ mensagem: 'Erro! Ocorreu um erro interno.', isOpen: true, severity: 'error' });
			setLoading(false);
		}
	};

	const autoCompleteStyle = {
		WebkitBoxShadow: `0 0 0 1000px ${theme.palette.primary.light} inset`,
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
				<Snackbar open={toastIsOpen.isOpen} autoHideDuration={10000} onClose={handleClose}>
					<Alert onClose={handleClose} severity={toastIsOpen.severity} sx={{ width: '100%' }}>
						{toastIsOpen.mensagem}
					</Alert>
				</Snackbar>
				<Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
					<PetsIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Dados Pet
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
					<form id="cadastroPet">
						<Stack spacing={2}>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Controller
									name="name"
									control={control}
									rules={{
										required: true,
									}}
									render={({ field: { onChange, value } }) => (
										<TextField
											onChange={onChange}
											value={value}
											label="Nome"
											fullWidth
											autoComplete=""
											required
											inputProps={{ style: autoCompleteStyle }}
											InputProps={{
												endAdornment: (
													<InputAdornment position="start">
														<LoyaltyIcon />
													</InputAdornment>
												),
											}}
										/>
									)}
								/>
								{errors.name && <AlertaErroForm textoErro="Campo obrigatório" />}
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Controller
									name="birth_date"
									control={control}
									rules={{
										required: true,
									}}
									render={({ field: { onChange, value } }) => (
										<DesktopDatePicker
											label="Data nascimento"
											inputFormat="DD/MM/YYYY"
											value={value}
											onChange={onChange}
											renderInput={(params) => <TextField {...params} />}
										/>
									)}
								/>
								{errors.birth_date && <AlertaErroForm textoErro="Campo obrigatório" />}
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Controller
									name="size"
									control={control}
									rules={{
										required: true,
									}}
									render={({ field: { onChange, value } }) => (
										<TextField
											select
											fullWidth
											label="Porte"
											value={value}
											onChange={onChange}
											error={errors.size}
											helperText={errors.size?.message}
										>
											{porte.map((porte) => (
												<MenuItem key={porte.valor} value={porte.valor}>
													{porte.nome}
												</MenuItem>
											))}
										</TextField>
									)}
								/>
								{errors.size && <AlertaErroForm textoErro="Campo obrigatório" />}
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
									Cadastrar
								</StyledLoadingButton>
							</Grid>
						</Stack>
					</form>
				</Box>
			</Grid>
		</Container>
	);
}
