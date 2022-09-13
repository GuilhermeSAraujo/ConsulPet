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

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});
dayjs.locale("pt-br");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<ThemeProvider theme={darkTheme}>
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
