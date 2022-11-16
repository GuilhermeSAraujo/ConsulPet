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

const DisplayPets = () => {
	const theme = useTheme();
	const pets = [
		{ nome: 'Capitu', dataNascimento: new Date(2015, 1, 1), porte: 'Pequeno' },
		{ nome: 'Qiyana', dataNascimento: new Date(2019, 6, 6), porte: 'Grande' },
		{ nome: 'John', dataNascimento: new Date(2017, 6, 2), porte: 'Grande' },
		{ nome: 'Shiva', dataNascimento: new Date(2022, 2, 8), porte: 'Médio' },
	];

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
					{pets.map((pet, i) => (
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
								'&.MuiGrid-root + &.MuiGrid-root': { marginBottom: 2 },
								maxHeight: '110px',
							}}
						>
							<Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
								<PetsIcon />
								<Typography ml={1} variant="body1">
									{pet.nome}
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
								<CakeIcon />
								<Typography ml={1} variant="body1">
									{pet.dataNascimento.toLocaleDateString()}
								</Typography>
							</Box>
							<Box
								sx={{ display: 'flex', justifyContent: 'center', mt: 0.5, mb: 0.5 }}
							>
								<StraightenIcon />
								<Typography ml={1} variant="body1">
									{pet.porte}
								</Typography>
							</Box>
						</Grid>
					))}
				</Box>
			</Grid>
		</Container>
	);
};

export default DisplayPets;
