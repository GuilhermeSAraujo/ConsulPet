import {
	Grid,
	Box,
	Container,
	CssBaseline,
	useTheme,
	Typography,
	Avatar,
} from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HealingIcon from '@mui/icons-material/Healing';
import EmailIcon from '@mui/icons-material/Email';
import CadastroVeterinarioService from '../service/cadastroVeterinarioService';
import { useQuery } from 'react-query';

const DisplayVeterinarios = () => {
	const theme = useTheme();

	const { data: vets } = useQuery(
		'vetsCadastro',
		async () => await CadastroVeterinarioService.buscarVeterinarios()
	);

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
					<LocalHospitalIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Veterinários cadastrados
				</Typography>
			</Box>
			<Grid
				container
				gap={2}
				sx={{
					placeContent: 'center',
				}}
			>
				<Box
					padding={2}
					sx={{
						mt: 1,
						backgroundColor: theme.palette.primary.light,
						borderRadius: '3%',
						border: '1px solid white',
						minWidth: '350px',
					}}
				>
					{vets && vets.data && vets.data.length > 0 ? (
						vets.data.map((vet, i) => (
							<Grid
								item
								key={i}
								xs={12}
								sm={12}
								md={12}
								lg={12}
								sx={{
									textAlign: 'center',
									border: '1px solid white',
									borderRadius: '16px',
									padding: 1,
									'&.MuiGrid-root + &.MuiGrid-root': { marginTop: 3 },
								}}
							>
								<Box sx={{ display: 'flex', justifyContent: 'center' }} mt={1} mb={1}>
									<MedicalInformationIcon />
									<Typography ml={1} variant="body1">
										{vet.user_account_details.name}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', justifyContent: 'center' }} mb={1}>
									<HealingIcon />
									<Typography ml={1} variant="body1">
										{vet.specialization}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', justifyContent: 'center' }} mb={1}>
									<HealthAndSafetyIcon />
									<Typography ml={1} variant="body1">
										CRMV: {vet.crm}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', justifyContent: 'center' }} mb={1}>
									<LocalPhoneIcon />
									<Typography ml={1} variant="body1">
										{vet.user_account_details.phone}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', justifyContent: 'center' }}>
									<EmailIcon />
									<Typography ml={1} variant="body1">
										{vet.user_account_details.email}
									</Typography>
								</Box>
							</Grid>
						))
					) : (
						<Typography ml={0.5} variant="body1" textAlign="center">
							Nenhum veterinário foi cadastrado
						</Typography>
					)}
				</Box>
			</Grid>
		</Container>
	);
};

export default DisplayVeterinarios;
