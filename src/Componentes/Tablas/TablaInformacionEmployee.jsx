import * as React from 'react';
//import Box from '@mui/material/Box';
//import { DataGrid } from '@mui/x-data-grid';
//import { useDatosEmployeePorManagerId } from '../../Hooks/useDatosEmployeePorManagerId';
import { useInformacionEmployee } from '../../Hooks/useInformacionEmployee';

import { TableContainer, Table, TableBody, TableRow, TableCell, Paper } from '@mui/material';









export const TablaInformacionEmployee = ({idEmployee}) => {

  const [datosEmployee]=useInformacionEmployee(idEmployee);

  const tableStyle = {
    maxWidth: 400, // Establece el ancho máximo de la tabla
    height:'100vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    //margin: '0 auto', // Centra la tabla horizontalmente
  };

  const dataMapeados = Object.keys(datosEmployee).map(key => ({ label: key, value: datosEmployee[key] }));
  return (
    <TableContainer component={Paper} style={tableStyle}>
      <Table>
        <TableBody>
          {dataMapeados.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell>{row.value}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/*

   <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.middleName}</TableCell>
              <TableCell>{row.initiald}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.fullName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.dateOfBirth}</TableCell>
              <TableCell>{row.countryOfBirth}</TableCell>
              <TableCell>{row.managerId}</TableCell>
              <TableCell>{row.managerMatrixId}</TableCell>
              <TableCell>{row.fechaCarga}</TableCell>
              <TableCell>{row.manager}</TableCell>
*/