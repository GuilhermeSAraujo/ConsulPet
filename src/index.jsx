import React from 'react';
import dayjs from 'dayjs';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './shared/components/navbar';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Cadastro from './Pages/Cadastro/cadastro';
import Pets from './Pages/Pets/pets';
import Agendamentos from './Pages/PetShop/Agendamentos/agendamentos';
import CadastroVeterinario from './Pages/PetShop/CadastroVeterinario/cadastroVeterinario';
import './index.css';
import 'dayjs/locale/pt-br';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AgendamentosCliente from './Pages/Home/agendamentosCliente';

const queryClient = new QueryClient();
const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			light: '#362873',
			main: '#fff',
			dark: '#000022',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ffffff',
			main: '#fffff8',
			dark: '#ccccc5',
			contrastText: '#000',
		},
	},
});

dayjs.locale('pt-br');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<HashRouter>
					<ThemeProvider theme={theme}>
						<Navbar />
						<Routes>
							<Route path="*" element={<Login />} />
							<Route path="/login" element={<Login />} />
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/home" element={<AgendamentosCliente />} />
							<Route path="/pets" element={<Pets />} />
							<Route path="/petshop/agendamentos" element={<Agendamentos />} />
							<Route
								path="/petshop/cadastroVeterinario"
								element={<CadastroVeterinario />}
							/>
						</Routes>
					</ThemeProvider>
				</HashRouter>
			</LocalizationProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
