import { Grid , Container } from '@mui/material'
import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

//import { UseGetEmployesManager } from '../../Servicios/ServicioEmployee'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { GraficaCantEmpleadosXManager } from '../Menu/Empleado/GraficaCantEmpleadosXManager';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Inicio = () => {
  return (
    <Container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
        <Grid Container>
            <Grid item 
             xs={3}
             sm={3}
             md={3}
             lg={3}
             xl={3}>
                <h1>Inicio</h1>               
              
            </Grid>
            <Grid>
              <SimplePaper/>
            </Grid>
          
        </Grid>
    </Container>
    
  )
}

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

