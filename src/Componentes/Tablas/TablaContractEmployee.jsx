import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useListaCompensationPorIdEmployee } from '../../Hooks/useListaCompensationPorIdEmployee';
import { useListaContractPorIdEmployee } from '../../Hooks/useListaContractPorIdEmployee';

/*




*/

const columns = [
    { field: 'employeeId', headerName: 'ID', width: 90 },
    {
      field: 'assignamentType',
      headerName: 'assignamentType',
      width: 80,
      editable: true,
    },
    {
      field: 'workShift',
      headerName: 'workShift',
      width: 80,
      editable: true,
    },
    {
      field: 'scheduledWeeklyHours',
      headerName: 'scheduledWeeklyHours',
      width: 80,
      editable: true,
    },
    {
      field: 'employeeTypo',
      headerName: 'employeeTypo',
      width: 80,
      editable: true,
    },
    {
      field: 'timeType',
      headerName: 'timeType',
      width: 110,
      editable: true,
    },
    {
      field: 'supervisoryOrganization',
      headerName: 'supervisoryOrganization',
      width: 110,
      editable: true,
    },
    {
      field: 'lineOfBusiness',
      headerName: 'lineOfBusiness',
      sortable: false,
      width: 160,
    },
    {
      field: 'jobProfile',
      headerName: 'jobProfile',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
        field: 'businessTitle',
        headerName: 'businessTitle',
        width: 110,
        editable: true,
      },
      {
        field: 'compensationGrade',
        headerName: 'compensationGrade',
        width: 110,
        editable: true,
      },
      {
        field: 'compensationGradeProfile',
        headerName: 'compensationGradeProfile',
        sortable: false,
        width: 160,
      },
      {
        field: 'subBanda',
        headerName: 'subBanda',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'status',
        headerName: 'status',
        width: 110,
        editable: true,
      },
      {
        field: 'hireDate',
        headerName: 'hireDate',
        width: 110,
        editable: true,
      },
      {
        field: 'hireCategory',
        headerName: 'hireCategory',
        sortable: false,
        width: 160,
      },
      {
        field: 'hireReason',
        headerName: 'hireReason',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'costCenterId',
        headerName: 'costCenterId',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'costCenterName',
        headerName: 'costCenterName',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'worhPlaceIncicator',
        headerName: 'worhPlaceIncicator',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'fte',
        headerName: 'fte',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'manager',
        headerName: 'manager',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'fechaDeCarga',
        headerName: 'fechaDeCarga',
        type: 'number',
        width: 110,
        editable: true,
      },
  ];
 ;

  
  
  
  
  export const TablaContractEmployee =({idEmployee})=> {
  
    const [listaContractPorIdEmployee]=useListaContractPorIdEmployee(idEmployee);
     // if (!datosEmployee || datosEmployee.length === 0) {
    //      return <div>Cargando datos...</div>;
    //  }
  
    return (
      <Box sx={{ height: '50%', width: '100%' }}>
        <h3>Tabla de Contract</h3>

        <DataGrid
          rows={listaContractPorIdEmployee}
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
  