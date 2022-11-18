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
import PetsService from '../service/petsService';

const DisplayPets = () => {
	const theme = useTheme();

	const { data: pets } = useQuery(
		'pets',
		async () => await PetsService.buscaPets(1),
		{ cacheTime: 600000, staleTime: 600000 }
	);
	console.log("🚀 ~ file: displayPets.jsx ~ line 21 ~ DisplayPets ~ pets", pets)

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
					<FavoriteIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Meus pets
				</Typography>
			</Box>
			<Grid
				container
				gap={1}
				sx={{
					placeContent: 'center',
				}}
			>
				<Box
					padding={1}
					sx={{
						mt: 1,
						backgroundColor: theme.palette.primary.light,
						borderRadius: '3%',
						border: '1px solid white',
						minWidth: '280px',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						paddingTop: 2,
					}}
				>
					{pets && pets.length > 0 ? pets.map((pet, i) => (
						<Grid
							item
							key={i}
							xs={12}
							sm={12}
							md={5}
							lg={5}
							sx={{
								textAlign: 'center',
								border: '1px solid white',
								borderRadius: '16px',
								padding: 1,
								// '&.MuiGrid-root + &.MuiGrid-root': { marginBottom: 2 },
								'&.MuiGrid-root': { marginBottom: 1 },
								// marginBottom: 1,
								maxHeight: '110px',
							}}
						>
							<Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
								<PetsIcon />
								<Typography ml={0.5} variant="body1">
									{pet.name}
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
								<CakeIcon />
								<Typography ml={0.5} variant="body1">
									{pet.type}
								</Typography>
							</Box>
							<Box
								sx={{ display: 'flex', justifyContent: 'center', mt: 0.5, mb: 0.5 }}
							>
								<StraightenIcon />
								<Typography ml={0.5} variant="body1">
									{pet.size}
								</Typography>
							</Box>
						</Grid>
					)) : (<Typography ml={0.5} variant="body1">
						Você ainda não possui<br />nenhum pet cadastrado
					</Typography>)}
				</Box>
			</Grid>
		</Container>
	);
};

export default DisplayPets;
