import { Box, Typography } from '@mui/material';

const ModalAgendamento = ({ agendamento }) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: 400,
				height: 400,
				backgroundColor: '#362873',
			}}
		>
			<Typography>{JSON.stringify(agendamento)}</Typography>
		</Box>
	);
};

export default ModalAgendamento;
