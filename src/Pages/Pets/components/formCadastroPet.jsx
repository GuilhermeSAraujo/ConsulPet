import {
	Grid,
	Button,
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
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AlertaErroForm from '../../../shared/components/erroForm';
import PetsIcon from '@mui/icons-material/Pets';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StyledLoadingButton from '../../../utils/components/LoadingButton';
import { porte } from '../../../utils/enum/selectEnum';

import { useForm, Controller } from 'react-hook-form';
import dayjs from 'dayjs';

export default function FormCadastroPet() {
	const theme = useTheme();

	const {
		handleSubmit,
		control,
		formState: { errors, isDirty, isValid },
	} = useForm({
		defaultValues: { name: '', birthDate: '01/01/2022', size: '' },
		mode: 'onChange',
	});

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
									name="birthDate"
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
								{errors.birthDate && <AlertaErroForm textoErro="Campo obrigatório" />}
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
												<MenuItem key={porte.valor} value={porte.nome}>
													{porte.nome}
												</MenuItem>
											))}
										</TextField>
									)}
								/>
								{errors.size && <AlertaErroForm textoErro="Campo obrigatório" />}
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
								<StyledLoadingButton>Cadastrar</StyledLoadingButton>
							</Grid>
						</Stack>
					</form>
				</Box>
			</Grid>
		</Container>
	);
}
