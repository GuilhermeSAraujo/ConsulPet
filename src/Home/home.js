import { Link } from "react-router-dom";
import { Grid, Box, Typography, FormControl, Select, MenuItem, TextField, Button, Stack, InputLabel, InputAdornment, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import DogTitulo from '../assets/dogTitulo.svg';
import PersonIcon from '@mui/icons-material/Person';
import PetsIcon from '@mui/icons-material/Pets';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useDebounce } from '../utils/useDebounce';
import { encontraPorte, encontraServico } from "../utils/enum/selectEnum";
import dayjs from "dayjs";

function Home() {
  const [porte, setPorte] = useState('');
  const [servico, setServico] = useState('');
  const [nome, setNome] = useState("");
  const [data, setData] = useState(dayjs());
  const debouncedData = useDebounce(data, 5000);

  const onSubmit = (data) => console.log(data);

  const handleNome = (value) => {
    setNome(value);
  }

  const handlePorte = (e) => {
    setPorte(e.target.value);
  }

  const handleServico = (e) => {
    setServico(e.target.value);
  }
  const handleData = (newValue) => {
    if (newValue !== undefined) {
      setData(newValue);
    }
  };

  const handleDisableCheckbox = () => {
   return true;
  }
  // /^[a-zA-Z ]{2,30}$/
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container padding={0} sx={{
        width: '100%',
        paddingTop: '1%',
        paddingBottom: '1%',
        justifyContent: 'center'
      }}>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{
          backgroundColor: '#4eff27',
          paddingTop: '10px',
          paddingBottom: '10px'
        }}>
          <Typography fontWeight={600} variant="h4" sx={{
            letterSpacing: '5px'
          }} >
            <Box src={DogTitulo} component='img'
              sx={{
                maxWidth: '45px',
                verticalAlign: 'bottom'
              }}
            />
            ConsulPet
          </Typography>
        </Grid>
        <Grid item sm={12} md={7} lg={7} sx={{
          marginTop: '8vh',
          textAlign: 'center',
        }}>
          <Box 
          sx={{
            backgroundColor: '#d3f2d3',
            paddingTop: '20px',
            paddingBottom: '25px',
            borderRadius: '10%',
            paddingRight: '15%',
            paddingLeft: '15%',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
          }}>
            <Typography variant='h5' fontWeight={400} sx={{ marginBottom: '1.5rem', letterSpacing: '2px' }}>Agende seu horário</Typography>
            <Stack spacing={3}>
              <FormControl>
                <TextField type='text' label="Nome completo" value={nome} onChange={(e) => handleNome(e.target.value)}  
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }} />
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
                  sx={{ textAlign: 'left' }}
                  endAdornment={
                    <InputAdornment position="end" sx={{
                      marginRight: "1rem"
                    }}>
                      <PetsIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={encontraPorte(1)}>{encontraPorte(1).nome}</MenuItem>
                  <MenuItem value={encontraPorte(2)}>{encontraPorte(2).nome}</MenuItem>
                  <MenuItem value={encontraPorte(3)}>{encontraPorte(3).nome}</MenuItem>
                </Select>
              </FormControl>
              <FormControl >
              <InputLabel id="labelServico">Serviço</InputLabel>
                <Select
                  value={servico}
                  label="Serviço"
                  labelId="labelServico"
                  onChange={handleServico}
                  sx={{ textAlign: 'left' }}
                  endAdornment={
                    <InputAdornment position="end" sx={{
                      marginRight: "1rem"
                    }}>
                      <RoomServiceIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={encontraServico(1)}>{encontraServico(1).nome}</MenuItem>
                  <MenuItem value={encontraServico(2)}>{encontraServico(2).nome}</MenuItem>
                  <MenuItem value={encontraServico(3)}>{encontraServico(3).nome}</MenuItem>
                </Select>
              </FormControl>
              <FormGroup sx={{
                display: 'table-row-group'
              }}>
                <FormControlLabel control={<Checkbox disabled={true} />} label="Banho" />
                <FormControlLabel control={<Checkbox />} label="Tosa" />
                <FormControlLabel control={<Checkbox />} label="Desembaraçamento" />
                <FormControlLabel control={<Checkbox />} label="Corte de unhas" />
                <FormControlLabel control={<Checkbox />} label="Hidratação" />
                <FormControlLabel control={<Checkbox />} label="Consulta" />
                <FormControlLabel control={<Checkbox />} label="Vacinação" />
                <FormControlLabel control={<Checkbox />} label="Passeio" />
                <FormControlLabel control={<Checkbox />} label="Adestramento" />
              </FormGroup>
              <Button color="primary" onClick={onSubmit} sx={{marginTop: '15px', borderRadius: '10%', color: 'darkblue', backgroundColor: '#c4e3cd'}}>Enviar</Button>
            </Stack>
          </Box>
        </Grid>
      </Grid >
    </LocalizationProvider >
  );
}

export default Home;
