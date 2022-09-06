import { Link } from "react-router-dom";
import { Grid, Box, Typography, FormControl, Select, MenuItem, TextField, Button, Stack, InputLabel } from '@mui/material';
import DogTitulo from '../assets/dogTitulo.svg';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useDebounce } from '../utils/useDebounce';
import dayjs from "dayjs";

function Home() {
  const [porte, setPorte] = useState("");
  const [nome, setNome] = useState("");
  const [data, setData] = useState(dayjs());
  const debouncedData = useDebounce(data, 5000);

  const onSubmit = (data) => console.log(data);

  const handleNome = (value) => {
    console.log(value.target.value);
    setNome(value);
  }

  const handleChange = () => {
    console.log("OnChange");
  }
  const handleData = (newValue) => {
    if (newValue !== undefined) {
      setData(newValue);
    }
  };
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
          <Typography fontWeight={600} variant="h4" >
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
          marginTop: '2rem',
          textAlign: 'center',
        }}>
          <Box sx={{
            backgroundColor: '#d3f2d3',
            paddingTop: '20px',
            paddingBottom: '25px',
            borderRadius: '10%',
            paddingRight: '15%',
            paddingLeft: '15%'
          }}>
            <Typography variant='h5' fontWeight={400} sx={{ marginBottom: '1.5rem' }}>Agende seu horário</Typography>
            <Stack spacing={3}>
              <FormControl>
                <TextField type='text' label="Nome completo" value={nome} onChange={handleNome} />
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
                <InputLabel id='porte'>Porte</InputLabel>
                <Select
                  labelId="porte"
                  id="selectPorte"
                  value={porte}
                  label="Porte"
                  onChange={handleChange}
                  sx={{ textAlign: 'left' }}
                >
                  <MenuItem value={1}>Pequeno</MenuItem>
                  <MenuItem value={2}>Médio</MenuItem>
                  <MenuItem value={3}>Grande</MenuItem>
                </Select>
              </FormControl>
              <FormControl >
                <InputLabel id='servico'>Serviço</InputLabel>
                <Select
                  labelId="servico"
                  id="selectServico"
                  value={porte}
                  label="Serviço"
                  onChange={handleChange}
                  sx={{ textAlign: 'left' }}
                >
                  <MenuItem value={1}>Banho e tosa</MenuItem>
                  <MenuItem value={2}>Consulta veterinária</MenuItem>
                  <MenuItem value={3}>Exames de laboratório</MenuItem>
                  <MenuItem value={4}>Hospedagem</MenuItem>
                </Select>
                <Button color="primary" onClick={onSubmit}>Enviar</Button>
              </FormControl>
            </Stack>
          </Box>
        </Grid>
      </Grid >
    </LocalizationProvider >
  );
}

export default Home;
