import { Grid } from '@mui/material';
import DisplayVeterinarios from './components/displayVeterinarios';
import FormCadastroVeterinario from './components/formCadastroVeterinario';

const CadastroVeterinario = () => {
	return (
		<Grid container sx={{ '.MuiGrid-root': { paddingX: '0px' } }}>
			<Grid
				item
				xs={12}
				sm={12}
				md={6}
				lg={6}
				sx={{ '.MuiGrid-root': { paddingX: '0px' } }}
			>
				<FormCadastroVeterinario />
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
				<DisplayVeterinarios />
			</Grid>
		</Grid>
	);
};

export default CadastroVeterinario;
