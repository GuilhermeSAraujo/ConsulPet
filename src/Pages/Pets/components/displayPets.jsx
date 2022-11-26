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
import dayjs from 'dayjs';
import { tamanhos } from '../../../utils/enum/selectEnum';

const DisplayPets = () => {
	const theme = useTheme();

	const { data: pets } = useQuery(
		'pets',
		async () => await PetsService.buscaPets(1),
		{ cacheTime: 600000, staleTime: 600000 }
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
					<FavoriteIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Meus pets
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
						minWidth: { xs: '280px', md: '320px' },
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						paddingTop: 2,
					}}
				>
					{pets && pets.length > 0 ? (
						pets.map((pet, i) => (
							<Grid
								item
								key={i}
								xs={8}
								sm={8}
								md={5.5}
								lg={5.5}
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
										{pet.name}
									</Typography>
								</Box>
								<Box
									sx={{ display: 'flex', justifyContent: 'center', mt: 0.5, mb: 0.5 }}
								>
									<StraightenIcon />
									<Typography ml={0.5} variant="body1">
										{tamanhos[pet.size]}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
									<CakeIcon />
									<Typography ml={0.5} variant="body1">
										{dayjs(pet.birth_date).format('DD/MM/YYYY')}
									</Typography>
								</Box>
							</Grid>
						))
					) : (
						<Typography ml={0.5} variant="body1">
							Você ainda não possui
							<br />
							nenhum pet cadastrado
						</Typography>
					)}
				</Box>
			</Grid>
		</Container>
	);
};

export default DisplayPets;
