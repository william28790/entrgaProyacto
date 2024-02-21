import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDatosEmployeePorManagerId } from '../../Hooks/useDatosEmployeePorManagerId';
import { Link } from 'react-router-dom';

//CREACION DE COLUMNAS 
const columns = [
  { field: 'id', headerName: 'ID', width: 90 ,
  renderCell: (params) => <Link to={'/employee/'+params.value}>{params.value}</Link>},
  {
    field: 'email',
    headerName: 'email',
    width: 150,
    editable: true,
    
  },
  {
    field: 'fullName',
    headerName: 'fullName',
    width: 150,
    editable: true,
  },
  {
    field: 'contractStatus',
    headerName: 'status',
    width: 110,
    editable: true,
  },
  {
    field: 'compensationMonthlyReferenceSalary',
    headerName: 'monthlyReferenceSalary',
    width: 150,
    editable: true,
  },
  {
    field: 'contractJobProfile',
    headerName: 'jobProfile',
    width: 110,
    editable: true,
  },
  {
    field: 'compensationPmr',
    headerName: 'pmr',
    width: 110,
    editable: true,
  },
  {
    field: 'compensationCompensationGradeProfile',
    headerName: 'compensationGradeProfile',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
   // valueGetter: (params) =>
     // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export default function TablaEmpleadosPorManager({idManager}) {
    const [datosEmployeePorManagerId]=useDatosEmployeePorManagerId(idManager);


   // getSelectedRows: () => Map<GridRowId, GridRowModel>

    if (!datosEmployeePorManagerId || datosEmployeePorManagerId.length === 0) {
        return <div>Cargando datos...</div>;
    }

     // Modificar los datos para incluir el campo "contractStatus" que proviene de "contract.status"
     const datosConStatus = datosEmployeePorManagerId.map(employee => ({
        ...employee,
        contractStatus: employee.contract?.status || '', // Acceder a "status" dentro de "contract"
        compensationMonthlyReferenceSalary: employee.compensation?.monthlyReferenceSalary || '',
        contractJobProfile: employee.contract?.jobProfile || '',
        compensationPmr: employee.compensation?.pmr || '',
        compensationCompensationGradeProfile:employee.compensation?.compensationGradeProfile
    }));
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={datosConStatus}
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

