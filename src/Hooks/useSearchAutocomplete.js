import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

export const useSearchAutocomplete = () => {
    const [searchAutocomplete,setSearchAutocomplete]=useState([]);

    //const url='http://localhost:8085/employee/searchAutocomplete';
    const url='http://52.23.156.12:8085/employee/searchAutocomplete';
    
    const fetchData = useCallback(async () => {
      try {
        const response = await axios.get(url);
        console.log('Respuesta del servicio completa:', response);
  
        if (response.status === 200) {
            setSearchAutocomplete(response.data);
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
  


  return [searchAutocomplete];
}
