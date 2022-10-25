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
    defaultValues: { login: '', senha: '' },
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    setTimeout(1000, setLoading(false));
    // await CadastroService.cadastraCliente(data); // processo de cadastro
    // setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs" bc={theme.palette.primary.main}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
          padding={4}
          sx={{
            mt: 1,
            backgroundColor: theme.palette.primary.light,
            borderRadius: '3%',
            border: '1px solid white',
          }}
        >
          <form id="cadastro">
            <Grid container p={0} m={0}>
              <Grid item xs={12} pb={3}>
                <Controller
                  name="login"
                  control={control}
                  rules={{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="Email"
                      fullWidth
                      autoComplete="email"
                      autoFocus
                      required
                      inputProps={{ style: autoCompleteStyle }}
                      InputProps={{
											  endAdornment: (
  <InputAdornment position="start">
    <PersonIcon />
  </InputAdornment>
											  ),
                      }}
                    />
                  )}
                />
                {errors.login && (
                <AlertaErroForm textoErro="Campo obrigatório" />
                )}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="senha"
                  control={control}
                  rules={{ required: true, minLength: 6, maxLength: 20 }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      type="password"
                      value={value}
                      label="Senha"
                      fullWidth
                      autoComplete="password"
                      autoFocus
                      required
                      inputProps={{ style: autoCompleteStyle }}
                      InputProps={{
											  endAdornment: (
  <InputAdornment position="start">
    <LockIcon />
  </InputAdornment>
											  ),
                      }}
                    />
                  )}
                />
                {errors.senha && (
                <AlertaErroForm textoErro="Campo obrigatório" />
                )}
              </Grid>
              <Grid item xs={12}>
                <StyledLoadingButton
                  onClick={handleSubmit(onSubmit)}
                  loading={loading}
                  loadingPosition="end"
                  disabled={!isDirty || !isValid}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: theme.palette.primary.dark }}
                  endIcon={<LoginIcon />}
                >
                  Entrar
                </StyledLoadingButton>
              </Grid>
              <Grid item xs={12}>
                <Typography onClick={() => navigate('/cadastro')} variant="body2" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                  Ainda não possui uma conta? Cadastre-se aqui.
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

const StyledLoadingButton = withStyles({
  root: {
    backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    },
  },
})(LoadingButton);

export default Login;
