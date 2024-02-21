
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography, makeStyles} from '@mui/material';
import React , {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';


const useStyles ={
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  paper: {
    padding: '20px',
    width: '300px',
    textAlign: 'center',
  },
};

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [usuario, setUsuario]=useState('');
  const [password , setPassword]= useState('');



// implementan logica 
  const handleSubmit = (event) => {
    event.preventDefault();
  

   console.log('Email:', usuario);
    console.log('Password:', password);
    setLoggedIn(true);
  };

  if(loggedIn){
    return <Navigate to="/paginaprincipal"/>
  }


  return (
      <div style={useStyles.root} >
        <Paper elevation={3} style={useStyles.paper}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Ingresar
          </Button>
        </form>
      </Paper>
      </div>
      );
};

export default Login;



