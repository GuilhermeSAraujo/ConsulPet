import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Modal from '@mui/material/Modal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

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
	const [modalOpen, setModalOpen] = React.useState(true);

	const handleSubmit = (event) => {
		setLoading(true);
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			firstName: data.get("firstName"),
			lastName: data.get("lastName"),
			password: data.get("password"),
		});
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Modal
					open={modalOpen}
					onClose={() => setModalOpen(false)}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						bgcolor: 'white',
						border: '2px solid #000',
						boxShadow: 24,
						p: 4,
						color: 'black'
					}}>
						<Typography style={{ display: 'inline' }} id="modal-modal-title" variant="h6" component="h2">
							{"Dados do"}
						</Typography>
						<Typography style={{ display: 'inline', color: 'purple' }} fontWeight={700} id="modal-modal-title" variant="h6" component="h2">{" Pet"}</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Cadastre aqui as informações do seu pet:
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="nomePet"
									required

									id="nomePet"
									label="Nome"
									autoFocus
								/>
							</Grid>
						</Grid>
					</Box>
				</Modal>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Cadastre-se
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} padding={4} sx={{ mt: 3, backgroundColor: '#9734ff', borderRadius: '3%', border: '1px solid white' }}>
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
							/>
						</Grid>
						<Grid item xs={12} textAlign='center'>
							<LoadingButton
								loading={loading}
								loadingPosition="end"
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								endIcon={<AddCircleIcon />}
								onClick={() => setModalOpen(true)}
							>
								Cadastrar pet
							</LoadingButton>
						</Grid>
						<Grid item xs={12} textAlign='center'>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
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
						sx={{ mt: 3, mb: 2 }}
						endIcon={<PersonAddIcon sx={{ ml: 0.5 }} />}
					>
						Cadastrar
					</LoadingButton>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/login" variant="body2">
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
