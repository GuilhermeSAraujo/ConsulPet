import { Link } from "react-router-dom";
import { Grid, Box, Typography, FormControl, Select, MenuItem, TextField, Button, Stack } from '@mui/material';
import DogTitulo from '../assets/dogTitulo.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function Home() {
  const [porte, setPorte] = useState();
  const [data, setData] = useState(); //debouce set data

  const handleChange = () => {
    console.log("OnChange");
  }
  const handleData = (newValue) => {
    console.log(newValue.utc());
    setData(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container padding={0} sx={{
        width: '100%',
        paddingTop: '1%',
        paddingBottom: '1%',
        justifyContent: 'center'
      }}>
        <Grid item sm={12} md={12} lg={12} sx={{
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
            paddingTop: '10px',
            paddingBottom: '20px',
            borderRadius: '10%'
          }}>
            <Typography variant='h5' fontWeight={400} sx={{ marginBottom: '1.5rem' }}>Agende seu horário</Typography>
            <FormControl>
              <Stack spacing={3}>
                <TextField type='text' fullWidth label="Nome completo" />
                <DateTimePicker
                  label="Data e hora"
                  value={data}
                  onChange={handleData}
                  renderInput={(params) => <TextField {...params} />}
                />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={porte}
                  label="Porte"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Pequeno</MenuItem>
                  <MenuItem value={2}>Médio</MenuItem>
                  <MenuItem value={3}>Grande</MenuItem>
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={porte}
                  label="Porte"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Banho e tosa</MenuItem>
                  <MenuItem value={2}>Consulta veterinária</MenuItem>
                  <MenuItem value={3}>Exames de laboratório</MenuItem>
                  <MenuItem value={4}>Hospedagem</MenuItem>
                </Select>
                <Button color="primary">Enviar</Button>
              </Stack>
            </FormControl>
          </Box>
        </Grid>
      </Grid >
    </LocalizationProvider >
  );
}

export default Home;
