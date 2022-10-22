import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
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
import { useNavigate } from 'react-router-dom';
import { validaEmail } from '../../utils/stringUtils';

function Login() {
  const [loading, setLoading] = React.useState(false);
  const [toastIsOpen, setToastIsOpen] = React.useState(false);
  const [inputLogin, setInputLogin] = React.useState('');
  const [inputSenha, setInputSenha] = React.useState('');
  const [erroEmail, setErroEmail] = React.useState(false);
  const [erroSenha, setErroSenha] = React.useState(false);

  const theme = useTheme();
  const navigate = useNavigate();

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color={theme.palette.text.secondary}
        align="center"
        {...props}
      >
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/GuilhermeSAraujo/consulpet">
          ConsulPet
        </Link>
        {' '}
        {new Date().getFullYear()}
        .
      </Typography>
    );
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setToastIsOpen(false);
  };

  const validaEntradasCredenciais = (email, senha) => {
    validaEmail(email) ? setErroEmail(false) : setErroEmail(true);
    senha.length > 0 ? setErroSenha(false) : setErroSenha(true);
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    // 	email: data.get("email"),
    // 	password: data.get("password"),
    // });
    const email = data.get('email');
    const password = data.get('password');
    validaEntradasCredenciais(email, password);
    navigate('/cadastrarAgendamento', { state: { autenticado: true } });
  };

  return (
    <Container component="main" maxWidth="xs" bc={theme.palette.primary.main}>
      <CssBaseline />
      <Box
        sx={{
				  marginTop: 8,
				  display: 'flex',
				  flexDirection: 'column',
				  alignItems: 'center'
        }}
      >
        <Snackbar open={toastIsOpen} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Login e/ou senha não estão correto(s)
          </Alert>
        </Snackbar>
        <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          padding={4}
          sx={{
					  mt: 1,
					  backgroundColor: theme.palette.primary.light,
					  borderRadius: '3%',
					  border: '1px solid white'
          }}
        >
          <TextField
            value={inputLogin}
            onChange={(e) => setInputLogin(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            error={erroEmail}
            helperText={erroEmail ? 'Favor preencher com um email válido.' : ''}
            InputProps={{
						  endAdornment: (
                <InputAdornment position="start">
    <PersonIcon />
  </InputAdornment>
						  )
            }}
          />
          <TextField
            value={inputSenha}
            onChange={(e) => setInputSenha(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            error={erroSenha}
            helperText={erroSenha ? 'Favor preencher o campo corretamente.' : ''}
            autoComplete="current-password"
            InputProps={{
						  endAdornment: (
                <InputAdornment position="start">
    <LockIcon />
  </InputAdornment>
						  )
            }}
          />
          <LoadingButton
            type="submit"
            loading={loading}
            loadingPosition="end"
            disabled={inputLogin.length === 0 || inputSenha.length === 0}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: theme.palette.primary.dark }}
            endIcon={<LoginIcon />}
          >
            Entrar
          </LoadingButton>
          <Grid container>
            <Grid item>
              <Link onClick={() => navigate('/cadastro')} variant="body2">
                Ainda não possui uma conta? Cadastre-se aqui.
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
export default Login;
