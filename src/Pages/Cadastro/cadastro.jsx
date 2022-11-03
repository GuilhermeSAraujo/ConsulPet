import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import CadastroService from './service/cadastroService';
import AlertaErroForm from '../../shared/components/erroForm';
import Copyright from '../../shared/components/copyright';
import { cpfMask } from '../../utils/cpfMask';

export default function Cadastro() {
  const [loading, setLoading] = React.useState(false);

  const theme = useTheme();
  const valoresIniciaisForm = {
    primeiroNome: '',
    sobrenome: '',
    senha: '',
    email: '',
    cpf: '',
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: valoresIniciaisForm,
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    await CadastroService.cadastraCliente(data); // processo de cadastro
    setLoading(false);
  };

  const autoCompleteStyle = {
    WebkitBoxShadow: `0 0 0 1000px ${theme.palette.primary.light} inset`,
  };

  return (
    <Container component="main" maxWidth="xs" p={0} m={0}>
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <Box
          padding={4}
          sx={{
					  mt: 3,
					  backgroundColor: theme.palette.primary.light,
					  borderRadius: '3%',
					  border: '1px solid yellow',
          }}
        >
          <form id="cadastro">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="primeiroNome"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="Primeiro nome"
                      fullWidth
                      autoComplete="given-name"
                      autoFocus
                      required
                      inputProps={{ style: autoCompleteStyle }}
                    />
                  )}
                />
                {errors.primeiroNome && (
                <AlertaErroForm textoErro="Campo obrigatório" />
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="sobrenome"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      required
                      autoComplete="family-name"
                      value={value}
                      label="Sobrenome"
                      fullWidth
                      inputProps={{ style: autoCompleteStyle }}
                    />
                  )}
                />
                {errors.sobrenome && <AlertaErroForm textoErro="Campo obrigatório" />}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="Email"
                      fullWidth
                      required
                      autoComplete="email"
                      inputProps={{ style: autoCompleteStyle }}
                    />
                  )}
                />
                {errors.email && <AlertaErroForm textoErro="Campo obrigatório" />}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="cpf"
                  control={control}
                  rules={{ required: true, maxLength: 14, minLength: 14 }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={(e) => onChange(cpfMask(e.target.value))}
                      value={value}
                      label="CPF"
                      fullWidth
                      required
                      inputProps={{ style: autoCompleteStyle }}
                    />
                  )}
                />
                {errors.cpf && <AlertaErroForm textoErro="Campo obrigatório" />}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="senha"
                  control={control}
                  rules={{ required: true, minLength: 6, maxLength: 20 }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="Senha"
                      autoComplete="new-password"
                      required
                      type="password"
                      fullWidth
                      inputProps={{ style: autoCompleteStyle }}
                    />
                  )}
                />
                {errors.senha && (
                <AlertaErroForm textoErro="Deve conter entre 6 e 20 caracteres" />
                )}
              </Grid>
            </Grid>
          </form>
          <LoadingButton
            onClick={handleSubmit(onSubmit)}
            loading={loading}
            loadingPosition="end"
            fullWidth
            disabled={!isDirty || !isValid}
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: theme.palette.primary.dark }}
            endIcon={<PersonAddIcon sx={{ ml: 0.5 }} />}
          >
            Cadastrar
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Já possui uma conta? Entre aqui.
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
