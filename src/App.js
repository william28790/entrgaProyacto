import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route , Router, Routes,R } from 'react-router-dom';
import Login from './Componentes/Login/Login';
import { Empleado } from './Componentes/Menu/Empleado/Empleado';
import { NavUIPrueba } from './Componentes/NavUIPrueba';
import { PaginaPrincipal } from './Componentes/Inicio/PaginaPrincipal';
import React, { useState } from 'react';
import NavBar from './Componentes/Navegador/NavBar';



function App() {
  const [loggedIn , setLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  }; 

  return (
    <div>
    <BrowserRouter>
    <NavUIPrueba/>
   {/*} <NavBar/> {*/}
      <Routes>
         <Route path="/employee/:id" element={<Empleado/>} />
         <Route path="/login" element={<Login />} />
         <Route path="/paginaPrincipal" element={<PaginaPrincipal/>} />
       </Routes>
   </BrowserRouter>

    </div>
    
  );
}

export default App;

/*
 <div>
    <BrowserRouter>
    <NavUIPrueba/>
  
      <Routes>
         <Route path="/empleado" element={<Empleado/>} />
         <Route path="/login" element={<Login />} />
         <Route path="/paginaPrincipal" element={<PaginaPrincipal/>} />
       </Routes>
   </BrowserRouter>

    </div>

*/

