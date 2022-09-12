import { Link } from "react-router-dom";
import {
	Grid,
	Box,
	Typography,
	FormControl,
	Select,
	MenuItem,
	TextField,
	Button,
	Stack,
	InputLabel,
	InputAdornment,
	FormControlLabel,
	Checkbox,
	FormGroup,
} from "@mui/material";
import DogTitulo from "../assets/dogTitulo.svg";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useDebounce } from "../utils/useDebounce";
import { encontraPorte, encontraServico } from "../utils/enum/selectEnum";
import dayjs from "dayjs";

function Home() {
	const [porte, setPorte] = useState("");
	const [servico, setServico] = useState("");
	const [pet, setPet] = useState("");
	const [data, setData] = useState(dayjs());
	const [banho, setBanho] = useState(false);
	const [tosa, setTosa] = useState(false);
	const [desembaracamento, setDesembaracamento] = useState(false);
	const [corteUnhas, setCorteUnhas] = useState(false);
	const [hidratacao, setHidratacao] = useState(false);
	const [consulta, setConsulta] = useState(false);
	const [vacinacao, setVacinacao] = useState(false);
	const [passeio, setPasseio] = useState(false);
	const [adestramento, setAdestramento] = useState(false);

	const debouncedData = useDebounce(data, 5000);
	const onSubmit = (data) => console.log(data);

	const handlePorte = (e) => {
		setPorte(e.target.value);
	};

	const handleServico = (e) => {
		setServico(e.target.value);
	};
	const handleData = (newValue) => {
		if (newValue !== undefined) {
			setData(newValue);
		}
	};

	const handlePet = () => {
		setPet({ nome: "Quiana", idade: 2 });
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Grid
				container
				padding={0}
				sx={{
					width: "100%",
					paddingTop: "1%",
					paddingBottom: "1%",
					justifyContent: "center",
				}}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					lg={12}
					sx={{
						backgroundColor: "#4eff27",
						paddingTop: "10px",
						paddingBottom: "10px",
					}}
				>
					<Typography
						fontWeight={600}
						variant="h4"
						sx={{
							letterSpacing: "5px",
						}}
					>
						<Box
							src={DogTitulo}
							component="img"
							sx={{
								maxWidth: "45px",
								verticalAlign: "bottom",
							}}
						/>
						ConsulPet
					</Typography>
				</Grid>
				<Grid
					item
					sm={12}
					md={7}
					lg={7}
					sx={{
						marginTop: "8vh",
						textAlign: "center",
					}}
				>
					<Box
						sx={{
							backgroundColor: "#d3f2d3",
							paddingTop: "20px",
							paddingBottom: "25px",
							borderRadius: "10%",
							paddingRight: "15%",
							paddingLeft: "15%",
							boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
						}}
					>
						<Typography
							variant="h5"
							fontWeight={400}
							sx={{ marginBottom: "1.5rem", letterSpacing: "2px" }}
						>
							Agende seu horário
						</Typography>
						<Stack spacing={3}>
							<FormControl>
								<InputLabel id="labelPet">Escolha seu pet</InputLabel>
								<Select
									value={pet}
									label="Escolha seu pet"
									labelId="labelPet"
									onChange={handlePet}
									sx={{ textAlign: "left" }}
								>
									<MenuItem value={encontraPorte(1)}>{encontraPorte(1).nome}</MenuItem>
									<MenuItem value={encontraPorte(2)}>{encontraPorte(2).nome}</MenuItem>
									<MenuItem value={encontraPorte(3)}>{encontraPorte(3).nome}</MenuItem>
								</Select>
							</FormControl>
							<FormControl>
								<DateTimePicker
									label="Data e hora"
									value={data}
									onChange={handleData}
									renderInput={(params) => <TextField {...params} />}
								/>
							</FormControl>
							<FormControl>
								<InputLabel id="labelPorte">Porte</InputLabel>
								<Select
									value={porte}
									label="Porte"
									labelId="labelPorte"
									onChange={handlePorte}
									sx={{ textAlign: "left" }}
									endAdornment={
										<InputAdornment
											position="end"
											sx={{
												marginRight: "1rem",
											}}
										>
											<PetsIcon />
										</InputAdornment>
									}
								>
									<MenuItem value={encontraPorte(1)}>{encontraPorte(1).nome}</MenuItem>
									<MenuItem value={encontraPorte(2)}>{encontraPorte(2).nome}</MenuItem>
									<MenuItem value={encontraPorte(3)}>{encontraPorte(3).nome}</MenuItem>
								</Select>
							</FormControl>
							<FormControl>
								<InputLabel id="labelServico">Serviço</InputLabel>
								<Select
									value={servico}
									label="Serviço"
									labelId="labelServico"
									onChange={handleServico}
									sx={{ textAlign: "left" }}
									endAdornment={
										<InputAdornment
											position="end"
											sx={{
												marginRight: "1rem",
											}}
										>
											<RoomServiceIcon />
										</InputAdornment>
									}
								>
									<MenuItem value={encontraServico(2)}>
										{encontraServico(2).nome}
									</MenuItem>
									<MenuItem value={encontraServico(1)}>
										{encontraServico(1).nome}
									</MenuItem>
									<MenuItem value={encontraServico(3)}>
										{encontraServico(3).nome}
									</MenuItem>
								</Select>
							</FormControl>
							<FormGroup
								sx={{
									display: "table-row-group",
								}}
							>
								<FormControlLabel
									control={
										<Checkbox
											disabled={servico.valor !== 2}
											value={banho}
											onClick={() => setBanho(!banho)}
										/>
									}
									label="Banho"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={servico.valor !== 2}
											value={tosa}
											onClick={() => setTosa(!tosa)}
										/>
									}
									label="Tosa"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={servico.valor !== 2}
											value={desembaracamento}
											onClick={() => setDesembaracamento(!desembaracamento)}
										/>
									}
									label="Desembaraçamento"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={servico.valor !== 2}
											value={corteUnhas}
											onClick={() => setCorteUnhas(!corteUnhas)}
										/>
									}
									label="Corte de unhas"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={servico.valor !== 2}
											value={hidratacao}
											onClick={() => setHidratacao(!hidratacao)}
										/>
									}
									label="Hidratação"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={servico.valor !== 1}
											value={consulta}
											onClick={() => setConsulta(!consulta)}
										/>
									}
									label="Consulta"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={servico.valor !== 1}
											value={vacinacao}
											onClick={() => setVacinacao(!vacinacao)}
										/>
									}
									label="Vacinação"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={servico.valor !== 3}
											value={passeio}
											onClick={() => setPasseio(!passeio)}
										/>
									}
									label="Passeio"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={servico.valor !== 3}
											val
											ue={adestramento}
											onClick={() => setAdestramento(!adestramento)}
										/>
									}
									label="Adestramento"
								/>
							</FormGroup>
							<Button
								color="primary"
								onClick={onSubmit}
								sx={{
									marginTop: "15px",
									borderRadius: "10%",
									color: "darkblue",
									backgroundColor: "#c4e3cd",
								}}
							>
								Enviar
							</Button>
						</Stack>
					</Box>
				</Grid>
			</Grid>
		</LocalizationProvider>
	);
}

export default Home;
