import React from 'react';
import { Line } from 'react-chartjs-2';
import { useEvolucionDeLaBandaEmployee } from '../../Hooks/useEvolucionDeLaBandaEmployee';
import { useEvolucionSalarialEmployee } from '../../Hooks/useEvolucionSalarialEmployee';


//import faker from 'faker';

/*
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
*/
//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
/*
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};*/



  const options2 = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
         
        },
      ],
    },
  };


export const GraficaLinealDoble =()=>{
  const [evolucionDeLaBandaEmployee] = useEvolucionDeLaBandaEmployee(249869 );
  const [evolucionSalarialEmployee]=useEvolucionSalarialEmployee(249869 );

  const fecha2 =evolucionSalarialEmployee.map(item => item[0].slice(0, 11));
  const salario =evolucionSalarialEmployee.map(item => item[1]);
 
  const fecha =evolucionDeLaBandaEmployee.map(item => item[0]);
  const banda =evolucionDeLaBandaEmployee.map(item => parseInt(item[1],10));





  const data2 = {
    labels:fecha2,//['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto' , 'Septiembre','Octubre','Noviembre', 'Diciembre'] ,
    datasets: [
      {
        label: 'Salario',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data:salario,//[65, 59, 80, 81, 56, 55, 40,32,45,98,75,32] ,
        yAxisID: 'y-axis-1'
      },
      {
        label: 'Banda',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255,99,132,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: banda,//[45, 29, 70, 51, 36, 25, 30],
        yAxisID: 'y-axis-2'
      }
    ]
  };

    return (
        <Line data={data2} options={options2}/>
    )
}


//
//