import {
	Grid,
	Box,
	Container,
	CssBaseline,
	useTheme,
	Typography,
	Avatar,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { useEffect } from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import CadastroVeterinarioService from '../service/cadastroVeterinarioService';
import { useQuery } from 'react-query';

const DisplayVeterinarios = () => {
	const theme = useTheme();
	const veterinarios = [
		{
			id: 1,
			crm: '10887',
			specialization: 'Castração',
			user: {
				id: 1,
				name: 'Eliabner Teixeira',
				document: '151.968.326-02',
				email: 'iamelitm@mail.com',
				phone: '(31) 99746-7665',
				pets: [],
			},
		},
		{
			id: 1,
			crm: '10887',
			specialization: 'Castração',
			user: {
				id: 1,
				name: 'Eliabner Teixeira',
				document: '151.968.326-02',
				email: 'iamelitm@mail.com',
				phone: '(31) 99746-7665',
				pets: [],
			},
		},
	];

	const { data: vets } = useQuery(
		'vets',
		async () => await CadastroVeterinarioService.buscarVeterinarios(),
		{ cacheTime: 600000, staleTime: 600000 }
	);
		console.log(vets);
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
						minWidth: '280px',
					}}
				>
					{vets && vets.data && vets.data.length > 0 && vets.data.map((vet, i) => (
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
									{vet.user.name}
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
									{vet.user.phone}
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center' }} mb={1}>
								<EmailIcon />
								<Typography ml={1} variant="body1">
									{vet.user.email}
								</Typography>
							</Box>
						</Grid>
					))}
				</Box>
			</Grid>
		</Container>
	);
};

export default DisplayVeterinarios;
