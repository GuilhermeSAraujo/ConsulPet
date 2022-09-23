import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
import Agenda from "./Agenda/agenda";
import Home from "./Home/home";
import Login from "./Login/login";
import Cadastro from "./Cadastro/cadastro";
import "./index.css";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import makeServer from "./server";
import Navbar from "./shared/components/navbar";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: "#362873",
			main: "#fff",
			dark: "#000022",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ffffff",
			main: "#fffff8",
			dark: "#ccccc5",
			contrastText: "#000",
		},
	},
});

dayjs.locale("pt-br");
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Routes>
					<Route path={`*`} element={<Login />} />
					<Route path={`/login`} element={<Login />} />
					<Route path={`/cadastro`} element={<Cadastro />} />
					<Route path={`/cadastrarAgendamento`} element={<Home />} />
					<Route path={`/meusAgendamentos`} element={<Agenda />} />
				</Routes>
			</ThemeProvider>
		</HashRouter>
	</React.StrictMode>
);
