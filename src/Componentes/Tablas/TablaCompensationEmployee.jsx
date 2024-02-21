import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useListaCompensationPorIdEmployee } from '../../Hooks/useListaCompensationPorIdEmployee';



const columns = [
    { field: 'homeCMUM', headerName: 'ID', width: 90 },
    {
      field: 'compensationGradeProfile',
      headerName: 'compensationGradeProfile',
      width: 80,
      editable: true,
    },
    {
      field: 'pmr',
      headerName: 'pmr',
      width: 80,
      editable: true,
    },
    {
      field: 'lengthOfService',
      headerName: 'lengthOfService',
      width: 80,
      editable: true,
    },
    {
      field: 'annualReferenceSalary',
      headerName: 'annualReferenceSalary',
      width: 80,
      editable: true,
    },
    {
      field: 'monthlyReferenceSalary',
      headerName: 'monthlyReferenceSalary',
      width: 110,
      editable: true,
    },
    {
      field: 'nomberOfSalaryMonths',
      headerName: 'nomberOfSalaryMonths',
      width: 110,
      editable: true,
    },
    {
      field: 'currency',
      headerName: 'currency',
      sortable: false,
      width: 160,
    },
    {
      field: 'fechaDeCarga',
      headerName: 'fechaDeCarga',
      width: 110,
      editable: true,
    },
  ];
  
  
  
  
  
  export const TablaCompensationsEmployee =({idEmployee})=> {
  
      const [datosEmployeeCompenasation]=useListaCompensationPorIdEmployee(idEmployee);
  
  
     // if (!datosEmployee || datosEmployee.length === 0) {
    //      return <div>Cargando datos...</div>;
    //  }
  
    return (
      <Box sx={{ height: '50%', width: '100%' }}>
        <h3>Tabla de Compensation</h3>
        <DataGrid
          rows={datosEmployeeCompenasation}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    );
  }
  
  
  