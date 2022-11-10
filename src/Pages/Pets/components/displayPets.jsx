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

const DisplayPets = () => {
	const theme = useTheme();
	const pets = [
		{ nome: 'Capitu', dataNascimento: new Date(1, 0, 2015), porte: 'Pequeno' },
		{ nome: 'Capitu', dataNascimento: new Date(1, 0, 2015), porte: 'Pequeno' },
		{ nome: 'Capitu', dataNascimento: new Date(1, 0, 2015), porte: 'Pequeno' },
		// { nome: 'Capitu', dataNascimento: new Date(1, 0, 2015), porte: 'Pequeno' },
		// { nome: 'Capitu', dataNascimento: new Date(1, 0, 2015), porte: 'Pequeno' },
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
						minWidth: '280px'
					}}
				>
					{pets.map((pet, i) => (
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
								'&.MuiGrid-root + &.MuiGrid-root': {marginTop: 3}
							}}
						>
							<Typography>{pet.nome}</Typography>
							<Typography>{pet.dataNascimento.toLocaleDateString()}</Typography>
							<Typography>{pet.porte}</Typography>
						</Grid>
					))}
				</Box>
			</Grid>
		</Container>
	);
};

export default DisplayPets;
