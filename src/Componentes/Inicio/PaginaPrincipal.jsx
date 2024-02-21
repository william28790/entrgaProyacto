import React, { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




import { Doughnut } from 'react-chartjs-2';

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
import { Box, Button, Container, Drawer, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import { usePromedioSalarialPorBanda } from '../../Hooks/usePromedioSalarialPorBanda';
import { useEmpleadosPorManager } from '../../Hooks/useEmpleadosPorManager';
import { useCantidadDeEmpleadosPorTipo } from '../../Hooks/useCantidadDeEmpleadosPorTipo';
import { useCantidadDeEmpleadosPorBanda } from '../../Hooks/useCantidadDeEmpleadosPorBanda';
import TablaEmpleadosPorManager from '../Tablas/TablaEmpleadosPorManager';


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


export const PaginaPrincipal = () => {
  
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: '#fff', // Cambia el color del texto según necesites
        textAlign: 'center',
        font: {
          weight: 'bold',
        },
        formatter: (value, context) => {
          const dataIndex = context.dataIndex;
          const label = context.chart.data.labels[dataIndex];
          const percentage = (value * 100 / context.dataset._meta[Object.keys(context.dataset._meta)[0]].total).toFixed(2) + '%';
          return label + '\n' + percentage;
        },
      },
    },
  };


  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <Paper elevation={12}>
            <h5>Promedio salarial por banda</h5>
            <TablaPromedioPorBanda />
          </Paper>
        </Grid>
        <Grid item xs={10} md={6} lg={3} xl={3}>
          <Paper elevation={12}>
            <h5>Empleados por manager</h5>
            <GraficaEmpleadosPorManager />
          </Paper>
        </Grid>
        <Grid item xs={10} md={6} lg={3} xl={3}>
          <Paper elevation={12}>
            <h5>Empleados por tipo</h5>
            <GraficaEmpleadosPorTipo />
          </Paper>
        </Grid>
        <Grid item xs={10} md={6} lg={3} xl={3}>
          <Paper elevation={12}>
            <h5>Empleados por banda </h5>
            <GraficaEmpleadosPorBanda />
          </Paper>
        </Grid>

      </Grid>

    </Box>
  )
}

export const TablaPromedioPorBanda = () => {
  const [promedio] = usePromedioSalarialPorBanda();


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Banda</TableCell>
            <TableCell align="right">Promedio mensual</TableCell>
            <TableCell align="right">Cantidad </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {promedio.map((row) => (
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="right">{row[1].toFixed(0)}</TableCell>
              <TableCell align="right">{row[2].toFixed(0)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const GraficaEmpleadosPorManager = () => {
  const [listaEmpleadosPorManager] = useEmpleadosPorManager();  // Lista de empleados por el manager 
  const [selectedSegment, setSelectedSegment] = useState(null);
  const chartRef = useRef(0);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [idManager, setIdManager] = useState(null);


  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  // asignacion de los datos para la grafica 
  const ids = listaEmpleadosPorManager.map(item => item[0]);
  const manager = listaEmpleadosPorManager.map(item => item[1]);
  const cantidadEmpleado = listaEmpleadosPorManager.map(item => item[2]);

  const datosDeEmpleadosPorManager = {
    labels: manager,
    id: ids,
    datasets: [
      {
        label: '# of Votes',
        data: cantidadEmpleado,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const optionsDeEmpleadosPorManager = {
    plugins: {
      Legend: {
        display: true,
        labels: {
          boxWidth: 10,
          fontSize: 0 // Establece el tamaño de la fuente a 0 para ocultar el texto
        }
      },
      datalabels: {
        color: 'white',
        textAlign: 'center',
        font: {
          weight: 'bold',
        },
        formatter: (value, context) => {
          return `${value} (${((value / context.chart.data.datasets[0].data.reduce((a, b) => a + b)) * 100).toFixed(1)}%)`;
        },
      },

    },
    resposive: true,
    onClick: (event, elements) => {

      const aux = elements._index;


      if (elements.length > 0) {
        const segmentIndex = elements[0].index;
        setSelectedSegment({
          label: datosDeEmpleadosPorManager.labels[segmentIndex],
          value: datosDeEmpleadosPorManager.datasets[0].data[segmentIndex],
          idManager: datosDeEmpleadosPorManager.id[segmentIndex],

        }
        );
        //console.log("elemento " +data.labels[segmentIndex]);
        setDrawerIsOpen(true);
        setIdManager(datosDeEmpleadosPorManager.id[segmentIndex]);

      }
    },
  };

  if (!listaEmpleadosPorManager || listaEmpleadosPorManager.length === 0) {
    return <div>Cargando datos...</div>;
}


  return (
    <box>
      <Doughnut ref={chartRef} data={datosDeEmpleadosPorManager} options={optionsDeEmpleadosPorManager} />
      <Drawer
        open={drawerIsOpen}
        onClose={closeDrawer}
        anchor='right'
        variant='persistent'

        sx={{
          width: isSmallScreen ? '100%' : 640,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isSmallScreen ? '100%' : 640,
          },
        }}
      >
        <Button onClick={closeDrawer} >cerrar</Button>
        {/*} <EnhancedTable idManager={idManager}/>{*/}
        <TablaEmpleadosPorManager idManager={idManager} />
      </Drawer>
    </box>

  )
}

const GraficaEmpleadosPorTipo = () => {
  const [cantidaDeEmpleadosPorTipo] = useCantidadDeEmpleadosPorTipo();


  // asignacion de los datos para la grafica 
  const tipo = cantidaDeEmpleadosPorTipo.map(item => item[0]);
  const cantidadEmpleado = cantidaDeEmpleadosPorTipo.map(item => item[1]);

  const datosDeEmpleadosPorManager = {
    labels: tipo,
    datasets: [
      {
        label: '# of Votes',
        data: cantidadEmpleado,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut data={datosDeEmpleadosPorManager} />
  )
}

const GraficaEmpleadosPorBanda = () => {
  const [cantidaDeEmpleadosPorBanda] = useCantidadDeEmpleadosPorBanda();


  // asignacion de los datos para la grafica 
  const tipo = cantidaDeEmpleadosPorBanda.map(item => item[0]);
  const cantidadEmpleado = cantidaDeEmpleadosPorBanda.map(item => item[1]);

  const datosDeEmpleadosPorManager = {
    labels: tipo,
    datasets: [
      {
        label: '# of Votes',
        data: cantidadEmpleado,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut data={datosDeEmpleadosPorManager} />

  )
}

/////////////////////////////////////////////////////////



//  ventana DESLIZANTE DRAW 









/*
 
TIENE LA FUNCION DE LA DESLIZAR LA VENTANA
 
const options = {
plugins: {
Legend:{
  display:true,
  labels: {
    boxWidth: 10,
    fontSize: 0 // Establece el tamaño de la fuente a 0 para ocultar el texto
  }
},
datalabels: {
  color: 'white',
  textAlign: 'center',
  font: {
    weight: 'bold',
  },
  formatter: (value, context) => {
    return `${value} (${((value / context.chart.data.datasets[0].data.reduce((a, b) => a + b)) * 100).toFixed(1)}%)`;
  },
},

},
resposive:true,
onClick: (event, elements) => {

  const aux=elements._index;
 

if (elements.length > 0) {
  const segmentIndex = elements[0].index;
  setSelectedSegment({
    label: data.labels[segmentIndex],
    value: data.datasets[0].data[segmentIndex], 
  }
  );
  console.log("elemento " +data.labels[segmentIndex]);
  setDrawerIsOpen(true);
  
}
},
};
*/