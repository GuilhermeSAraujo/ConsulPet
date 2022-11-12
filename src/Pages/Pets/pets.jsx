import * as React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import LoginService from './service/petsService';
import FormCadastroPet from './components/formCadastroPet';
import DisplayPets from './components/displayPets';

function Login() {
	const [loading, setLoading] = React.useState(false);
	const [toastIsOpen, setToastIsOpen] = React.useState(false);
	const theme = useTheme();
	const navigate = useNavigate();

	const {
		handleSubmit,
		control,
		formState: { errors, isDirty, isValid },
	} = useForm({
		defaultValues: { email: '', password: '' },
		mode: 'onChange',
	});

	const onSubmit = async (data) => {
		try {
			setLoading(true);
			await LoginService.verificaCredenciais(data);
			setLoading(false);
			navigate('/home');
		} catch (e) {
			setToastIsOpen(true);
			setLoading(false);
		}
	};

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
