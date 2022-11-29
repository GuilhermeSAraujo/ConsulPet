import * as React from 'react';
import { Grid } from '@mui/material';
import FormCadastroAgendamento from './components/formCadastroAgendamento';
import DisplayAgendamentos from './components/displayAgendamentos';

function AgendamentosCliente() {
    return (
        <Grid container sx={{ '.MuiGrid-root': { paddingX: '0px' } }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormCadastroAgendamento />
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                alignSelf="center"
                sx={{ '.MuiGrid-root': { paddingX: '0px' } }}
            >
                <DisplayAgendamentos />
            </Grid>
        </Grid>
    );
}

export default AgendamentosCliente;
