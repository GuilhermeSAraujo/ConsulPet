import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormCadastroPet from './components/formCadastroPet';
import DisplayPets from './components/displayPets';

function Login() {
	return (
		<Grid container sx={{ '.MuiGrid-root': { paddingX: '0px' } }}>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<FormCadastroPet />
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={6}
				lg={6}
				alignSelf="center"
				sx={{ '.MuiGrid-root': { paddingX: '0px' } }}
			>
				<DisplayPets />
			</Grid>
		</Grid>
	);
}

export default Login;
