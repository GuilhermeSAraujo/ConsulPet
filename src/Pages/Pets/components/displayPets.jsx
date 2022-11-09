import {
	Grid,
	Box,
	Container,
	CssBaseline,
	useTheme,
	Typography,
} from '@mui/material';

const DisplayPets = () => {
	const theme = useTheme();
	// const pets = [{nome: 'Capitu', dataNascimento: ''}]

	return (
		<Container component="main" maxWidth="xs" bc={theme.palette.primary.main}>
			<CssBaseline />
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<Typography>Capitu</Typography>
				<Typography>7 anos</Typography>
				<Typography>Pequena</Typography>
			</Grid>
		</Container>
	);
};

export default DisplayPets;
