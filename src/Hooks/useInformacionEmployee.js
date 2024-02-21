import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

export const useInformacionEmployee = (idEmployee) => {
    const [datosEmployee,setDatosEmployee]=useState([]);
  
    const url="http://52.23.156.12:8085/employee/"+idEmployee+"/informacionEmployee";

    const fetchData = useCallback(async () => {
      try {
        const response = await axios.get(url);
        console.log('Respuesta del servicio completa:', response);
  
        if (response.status === 200) {
          setDatosEmployee(response.data);
        }
      } catch (error) {
        // Manejar errores en caso de que la solicitud falle
        console.error('Error al obtener datos:', error);
      }
    }, [url]);
  
    useEffect(() => {
      let isMounted = true; // Variable para verificar si el componente está montado
  
      fetchData();
  
      return () => {
        isMounted = false; // Cambia el estado de montaje cuando el componente se desmonta
      };
    }, [fetchData]); // Solo se vuelve a llamar si fetchData cambia
  


  return [datosEmployee];
}



/*

export const useInformacionEmployee = (idEmployee) => {
    const [datosEmployee,setDatosEmployee]=useState([]);
  
    const url="http://localhost:8085/employee/"+idEmployee+"/informacionEmployee";

    useEffect(() => {
   
        const fetchData = async () => {
          try {
          
             const response = await axios.get(url);
            console.log('Respuesta del servicio completa:', response);
    
            if(response.status == 200)
            setDatosEmployee(response.data);
    
          } catch (error) {
            // Manejar errores en caso de que la solicitud falle
            console.error('Error al obtener datos:', error);
          }
        };
    
        // Llamar a la función fetchData al montar el componente (usando un arreglo vacío como segundo argumento)
        fetchData();
      }, []); // El segundo parámetro de useEffect asegura que se ejecute solo una vez al montar el componente.
    


  return [datosEmployee];
}


*/