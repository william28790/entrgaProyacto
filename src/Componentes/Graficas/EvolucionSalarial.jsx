import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEvolucionDeLaBandaEmployee } from '../../Hooks/useEvolucionDeLaBandaEmployee';
import { useEvolucionSalarialEmployee } from '../../Hooks/useEvolucionSalarialEmployee';


export default function EvolucionSalarial({ idEmployee }) {
  const [evolucionDeLaBandaEmployee] = useEvolucionDeLaBandaEmployee(idEmployee);
  const [evolucionSalarialEmployee] = useEvolucionSalarialEmployee(idEmployee);



  let fecha = evolucionDeLaBandaEmployee.map(item => item[0].slice(0, 10));
  const banda = evolucionDeLaBandaEmployee.map(item => parseInt(item[1], 10)); // String
  const salario = evolucionSalarialEmployee.map(item => item[1]);
  let fecha2 = evolucionSalarialEmployee.map(item => item[0].slice(0, 11));

  if (fecha.length < fecha2.length) {
    fecha = fecha2;
  }


  return (

    <box>
      <h3>Evolucion salarial </h3>
      <LineChart
        width={500}
        height={300}
        series={[
          { data: salario, label: 'Salario', yAxisKey: 'leftAxisId' },
          { data: banda, label: 'Banda', yAxisKey: 'rightAxisId' },
        ]}
        xAxis={[{ scaleType: 'point', data: fecha }]}
        yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
        rightAxis="rightAxisId"
      />
    </box>

  );

}

