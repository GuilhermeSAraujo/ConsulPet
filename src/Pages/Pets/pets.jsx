import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import AlertaErroForm from '../../shared/components/erroForm';
import Copyright from '../../shared/components/copyright';
import LoginService from './service/petsService';
import FormCadastroPet from './components/formCadastroPet';
import DisplayPets from './components/displayPets';

function Login() {
	const [loading, setLoading] = React.useState(false);
	const [toastIsOpen, setToastIsOpen] = React.useState(false);

	const theme = useTheme();
	const navigate = useNavigate();

	const autoCompleteStyle = {
		WebkitBoxShadow: `0 0 0 1000px ${theme.palette.primary.light} inset`,
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setToastIsOpen(false);
	};

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
			<Grid item xs={12} sm={12} md={6} lg={6} alignSelf="center">
				<DisplayPets />
			</Grid>
			{/* <Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				textAlign="center"
				sx={{ position: 'absolute', bottom: '5px', width: '100%' }}
			>
				<Copyright />
			</Grid> */}
		</Grid>
	);
}

export default Login;
