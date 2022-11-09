import { withStyles } from '@mui/styles';
import LoadingButton from '@mui/lab/LoadingButton';

const StyledLoadingButton = withStyles({
	root: {
		backgroundColor: '#3c52b2',
		color: '#fff',
		'&:hover': {
			backgroundColor: '#fff',
			color: '#3c52b2',
		},
	},
})(LoadingButton);

export default StyledLoadingButton;
