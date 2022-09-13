import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { fabClasses } from "@mui/material";

function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{"Copyright © "}
			<Link color="inherit" href="https://github.com/GuilhermeSAraujo/consulpet">
				ConsulPet
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

function Login() {
	const [loading, setLoading] = React.useState(false);
	const [toastIsOpen, setToastIsOpen] = React.useState(false);
	const [erroEmail, setErroEmail] = React.useState(false);
	const [erroSenha, setErroSenha] = React.useState(false);

	let navigate = useNavigate();

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setToastIsOpen(false);
	};

	async function Autentica(email, senha) {
		if (email.length === 0) {
			setErroEmail(true);
		}

		if (senha.length === 0) {
			setErroSenha(true);
		}

		if (email.length === 0 || senha.length === 0) {
			return false;
		}

		if (email === "123") {
			await new Promise(function (resolve) {
				setTimeout(resolve, 1000);
			});
			setToastIsOpen(true);
			return false;
		} else {
			await new Promise(function (resolve) {
				setTimeout(resolve, 1000);
			});
			return true;
		}
	}

	const handleSubmit = async (event) => {
		setLoading(true);
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
		const email = data.get("email");
		const password = data.get("password");
		let autenticado = await Autentica(email, password);
		setLoading(false);
		if (autenticado) {
			navigate("/cadastrarAgendamento", { state: { autenticado: true } });
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Snackbar open={toastIsOpen} autoHideDuration={1000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
						Login e/ou senha não estão correto(s)
					</Alert>
				</Snackbar>
				<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Entrar
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate padding={4} sx={{ mt: 1, backgroundColor: '#9734ff', borderRadius: '3%' }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
						autoFocus
						error={erroEmail}
						helperText={erroEmail ? "Favor preencher o campo." : ""}
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									<PersonIcon />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Senha"
						type="password"
						id="password"
						error={erroSenha}
						helperText={erroSenha ? "Favor preencher o campo." : ""}
						autoComplete="current-password"
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									<LockIcon />
								</InputAdornment>
							),
						}}
					/>
					<LoadingButton
						type="submit"
						loading={loading}
						loadingPosition="end"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						endIcon={<LoginIcon />}
					>
						Entrar
					</LoadingButton>
					<Grid container>
						<Grid item>
							<Link onClick={() => navigate("/cadastro")} variant="body2">
								{"Ainda não possui uma conta? Cadastre-se aqui."}
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
