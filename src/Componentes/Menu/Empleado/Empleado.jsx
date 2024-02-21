import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// Paper para alojar las graficas 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import {
  ArcElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

import { Container, Grid } from '@mui/material';
import { TablaInformacionEmployee } from '../../Tablas/TablaInformacionEmployee';
import { TablaCompensationsEmployee } from '../../Tablas/TablaCompensationEmployee';
import { TablaContractEmployee } from '../../Tablas/TablaContractEmployee';
import EvolucionSalarial from '../../Graficas/EvolucionSalarial';
import { useParams} from 'react-router-dom';



ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);





export function Empleado() {
  const { id } = useParams();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '30%',
        },
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={3} xl={3} spacing={1}>
          <Paper elevation={6}>
            <h5>Informacion personal</h5>

            <TablaInformacionEmployee idEmployee={id} />
          </Paper>

        </Grid>

        <Grid item xs={12} md={6} lg={5} xl={5} spacing={1}>
          <Paper elevation={6}>

            <TablaCompensationsEmployee idEmployee={id} />
            <TablaContractEmployee idEmployee={id} />
          </Paper>

        </Grid>

        <Grid xs={12} md={12} lg={4} xl={4} spacing={3}>
          <Paper elevation={6}>
            <EvolucionSalarial idEmployee={id} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

