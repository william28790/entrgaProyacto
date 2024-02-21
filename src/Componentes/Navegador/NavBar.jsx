import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Importa useHistory para manejar la navegación
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Logout } from '../Login/Logout';
import Autocomplete from '@mui/material/Autocomplete';
import { useSearchAutocomplete } from '../../Hooks/useSearchAutocomplete';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const [searchValue, setSearchValue] = useState('');
  const[searchAutocomplete] = useSearchAutocomplete();
  const navigator = useNavigate();

  const handleSearchChange = (event, newValue) => {
    setSearchValue(newValue ? newValue.name : '');
    console.log("entra bien en el handleSearchChange")
  };

  const handleSelect = (event, newValue) => {
    if (newValue) {
      navigator(`/employee/${newValue.id}`); // Redirige a la página de detalles con el ID seleccionado
    }
  };

  
      if (!searchAutocomplete || searchAutocomplete.length === 0) {
         return <div>Cargando datos...</div>;
     }
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            IBM
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Autocomplete
              freeSolo
              value={searchValue}
              onChange={handleSearchChange}
              options={searchAutocomplete || []} // Aquí puedes proporcionar tus opciones de autocompletado
              renderInput={(params) => (
                <StyledInputBase
                  {...params}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              )}
              onSelect={handleSelect} // Maneja la selección de una opción
            />
          </Search>

          <Logout/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}