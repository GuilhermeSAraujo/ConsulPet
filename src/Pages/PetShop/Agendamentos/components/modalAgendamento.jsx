import { Box, Typography, Divider } from '@mui/material';
import dayjs from 'dayjs';
import { status } from '../../../../utils/enum/selectEnum';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PersonIcon from '@mui/icons-material/Person';

const ModalAgendamento = ({ agendamento }) => {
	console.log(agendamento);
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: 400,
				height: 450,
				backgroundColor: '#362873',
				border: '1px solid white',
				borderRadius: '10px',
				textAlign: 'center',
				display: 'inline-grid',
				alignItems: 'center',
				paddingBottom: 2,
			}}
		>
			<Box mt={1.5} sx={{ display: 'flex', justifyContent: 'center', mt: 0.5, alignItems: 'center' }}>
				<ScheduleIcon />
				<Typography ml={1} variant="h5">Agendamento</Typography>
			</Box>
			<Divider />
			{!agendamento.vet ? (
				<Typography mt={1.5} variant="body1">
					Banho e tosa
				</Typography>
			) : (
				<Typography mt={1.5} variant="body1">
					Consulta veterinária
				</Typography>
			)}
			<Typography mt={1} variant="body1">
				{dayjs(agendamento.date).format('HH:mm - DD/MM/YY')}
			</Typography>
			<Typography mt={1} variant="body1">
				{status[agendamento.status]}
			</Typography>
			<Typography mt={1} variant="body1">
				{agendamento.pet.name}
			</Typography>

			{agendamento.vet && agendamento.vet_details ? (
				<>
					<Typography mt={1} variant="body1">
						{agendamento.vet_details.name}
					</Typography>
					<Typography mt={1} variant="body1">
						{agendamento.vet_details.phone}
					</Typography>
					<Typography mt={1} variant="body1">
						{agendamento.vet_details.email}
					</Typography>
				</>
			) : (
				<></>
			)}
			<Box mt={1.5} sx={{ display: 'flex', justifyContent: 'center', mt: 1.5, alignItems: 'center' }}>
				<PersonIcon />
				<Typography ml={1} variant="h5">Dados cliente</Typography>
			</Box>
			<Divider />
			<Typography mt={1} variant="body1">
				{agendamento.client.name}
			</Typography>
			<Typography mt={1} variant="body1">
				{agendamento.client.phone}
			</Typography>
			<Typography mt={1} variant="body1">
				{agendamento.client.email}
			</Typography>
		</Box>
	);
};

export default ModalAgendamento;
