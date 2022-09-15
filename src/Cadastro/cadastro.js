import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Card from "@mui/material/Card";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				ConsulPet
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Cadastro() {
	const [loading, setLoading] = React.useState(false);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [termosAceitos, setTermosAceitos] = React.useState(false);
	const [erroTermosAceitos, setErroTermosAceitos] = React.useState(false);
	const [pets, setPets] = React.useState([
		{ nomePet: "Qiyana", idadePet: "1", pesoPet: "17" },
		{ nomePet: "Capitu", idadePet: "6", pesoPet: "2" },
	]);
	const [erroPrimeiroNome, setErroPrimeiroNome] = React.useState(false);
	const [erroNomePet, setErroNomePet] = React.useState(false);
	const [erroIdadePet, setErroIdadePet] = React.useState(false);
	const [erroPesoPet, setErroPesoPet] = React.useState(false);
	const [erroSobrenome, setErroSobrenome] = React.useState(false);
	const [erroEmail, setErroEmail] = React.useState("");
	const [erroSenha, setErroSenha] = React.useState("");

	const darkTheme = createTheme({
		palette: {
			mode: "light",
		},
	});

	const handleSubmit = (event) => {
		setLoading(true);
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			firstName: data.get("firstName"),
			lastName: data.get("lastName"),
			password: data.get("password"),
			pets: pets,
		});
		const email = data.get("email");
		const firstName = data.get("firstName");
		const lastName = data.get("lastName");
		const password = data.get("password");
		if (password.length > 0 && password.length <= 4) {
			setErroSenha("A senha deve conter no mínimo 5 caracteres.");
		} else if (password.length === 0) {
			setErroSenha("Preencha com a sua senha.");
		} else {
			setErroSenha("");
		}

		if (email.length === 0) {
			setErroEmail("Preencha com seu email.");
		} else if (!email.includes("@") || !email.includes(".")) {
			setErroEmail("Preencha com um endereço de email válido.");
		} else {
			setErroEmail("");
		}

		if (firstName.length === 0) {
			setErroPrimeiroNome(true);
		} else {
			setErroPrimeiroNome(false);
		}

		if (lastName.length === 0) {
			setErroSobrenome(true);
		} else {
			setErroSobrenome(false);
		}

		if (!termosAceitos) {
			setErroTermosAceitos(true);
		} else {
			setErroTermosAceitos(false);
		}

		setLoading(false);
	};

	const handleAddPet = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		let novoPet = {
			nomePet: data.get("nomePet"),
			idadePet: data.get("idadePet"),
			pesoPet: data.get("pesoPet"),
		};

		if (novoPet.nomePet.length === 0) {
			setErroNomePet(true);
		} else {
			setErroNomePet(false);
		}

		if (novoPet.idadePet.length === 0) {
			setErroIdadePet(true);
		} else {
			setErroIdadePet(false);
		}

		if (novoPet.pesoPet.length === 0) {
			setErroPesoPet(true);
		} else {
			setErroPesoPet(false);
		}

		if (
			novoPet.nomePet.length > 0 &&
			novoPet.idadePet.length > 0 &&
			novoPet.pesoPet.length > 0
		) {
			setModalOpen(false);
			setPets((petsAntigos) => [...petsAntigos, novoPet]);
		}
	};

	const removePet = (index) => {
		let listaPetRemovido = pets.filter((p, i) => index !== i);
		setPets(listaPetRemovido);
	};

	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<Modal
					open={modalOpen}
					// disableScrollLock
					onClose={() => setModalOpen(false)}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					style={{ alignItems: "center", justifyContent: "center" }}
				>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							maxWidth: "400px",
							transform: "translate(-50%, -50%)",
							bgcolor: "white",
							border: "2px solid black",
							borderRadius: "3%",
							boxShadow: 24,
							p: 4,
							color: "black",
						}}
					>
						<Typography
							style={{ display: "inline" }}
							id="modal-modal-title"
							variant="h6"
							component="h2"
						>
							{"Dados do"}
						</Typography>
						<Typography
							style={{ display: "inline", color: "purple" }}
							fontWeight={700}
							id="modal-modal-title"
							variant="h6"
							component="h2"
						>
							{" Pet"}
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Cadastre aqui as informações do seu pet:
						</Typography>
						<Box
							component="form"
							onSubmit={handleAddPet}
							noValidate
							sx={{
								textAlign: "center",
							}}
						>
							<Stack spacing={2} pt={2}>
								<TextField
									autoComplete="given-name"
									name="nomePet"
									required
									id="nomePet"
									label="Nome"
									autoFocus
									error={erroNomePet}
									helperText={erroNomePet ? "Por favor, preencha o nome do pet." : ""}
								/>
								<TextField
									autoComplete="given-age"
									name="idadePet"
									required
									type="number"
									id="idadePet"
									label="Idade"
									autoFocus
									error={erroIdadePet}
									helperText={erroIdadePet ? "Por favor, preencha a idade do pet." : ""}
								/>
								<TextField
									autoComplete="given-weight"
									name="pesoPet"
									required
									type="number"
									id="pesoPet"
									label="Peso"
									autoFocus
									error={erroPesoPet}
									helperText={erroPesoPet ? "Por favor, preencha o peso do pet." : ""}
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{
										mt: 3,
										mb: 2,
										backgroundColor: "#5119d2",
										border: "1px solid black",
									}}
									endIcon={<AddCircleIcon />}
								>
									Adicionar
								</Button>
							</Stack>
						</Box>
					</Box>
				</Modal>
			</ThemeProvider>
			<Container component="main" maxWidth="xs" p={0} m={0}>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Cadastre-se
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						padding={4}
						sx={{
							mt: 3,
							backgroundColor: "#9734ff",
							borderRadius: "3%",
							border: "1px solid white",
						}}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="Primeiro nome"
									autoFocus
									error={erroPrimeiroNome}
									helperText={
										erroPrimeiroNome ? "Favor preencher com o seu primeiro nome." : ""
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Último nome"
									name="lastName"
									autoComplete="family-name"
									error={erroSobrenome}
									helperText={
										erroSobrenome ? "Favor preencher com o seu sobrenome." : ""
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Endereço de email"
									name="email"
									autoComplete="email"
									error={erroEmail.length > 0}
									helperText={erroEmail.length > 0 ? erroEmail : ""}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Senha"
									type="password"
									id="password"
									autoComplete="new-password"
									error={erroSenha.length > 0}
									helperText={erroSenha.length > 0 ? erroSenha : ""}
								/>
							</Grid>
							<Grid item xs={12} textAlign="center">
								<Button
									variant="contained"
									sx={{ mt: 2, mb: 2, backgroundColor: "#f0c7fc" }}
									endIcon={<AddCircleIcon />}
									onClick={() => setModalOpen(true)}
								>
									Cadastrar pet
								</Button>
							</Grid>
							{pets.length > 0 ? (
								<Grid item xs={12} textAlign="center">
									{pets.map((p, index) => {
										return (
											<Card key={index} sx={{ marginTop: index > 0 ? 2 : 0 }}>
												<Grid
													container
													p={1}
													sx={{ backgroundColor: "#f0c7fc", color: "black" }}
												>
													<Grid item xs={3} md={3} lg={3} textAlign="center">
														<Typography
															style={{ display: "inline" }}
															variant="body1"
															color="black"
															align="center"
														>
															{p.nomePet}
														</Typography>
													</Grid>
													<Grid item xs={3} md={3} lg={3} textAlign="center">
														<Typography
															style={{ display: "inline" }}
															variant="body1"
															color="black"
															align="center"
														>
															{p.idadePet} anos
														</Typography>
													</Grid>
													<Grid item xs={3} md={3} lg={3} textAlign="center">
														<Typography
															style={{ display: "inline" }}
															variant="body1"
															color="black"
															align="center"
														>
															{p.pesoPet}kg
														</Typography>
													</Grid>
													<Grid item xs={3} md={3} lg={3} textAlign="center">
														<Button
															sx={{ minHeight: 0, minWidth: 0, padding: 0, color: "black" }}
															onClick={() => removePet(index)}
														>
															<RemoveCircleIcon />
														</Button>
													</Grid>
												</Grid>
											</Card>
										);
									})}
								</Grid>
							) : (
								<></>
							)}
							<Grid item xs={12} textAlign="center" mt={2}>
								<FormControlLabel
								sx={{color: erroTermosAceitos ? 'red' : ''}}
									control={
										<Checkbox
											value={termosAceitos}
											onChange={() => setTermosAceitos(!termosAceitos)}
										/>
									}
									label="Concordo com os termos de consentimento."
								/>
							</Grid>
						</Grid>
						<LoadingButton
							type="submit"
							loading={loading}
							loadingPosition="end"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, backgroundColor: "#f0c7fc" }}
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
		</>
	);
}
