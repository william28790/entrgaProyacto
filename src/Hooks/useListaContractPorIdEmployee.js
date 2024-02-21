import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

export const useListaContractPorIdEmployee = (idEmployee) => {
    const [listaContractPorIdEmployee,setListaContractPorIdEmployee]=useState([]);
  
    const url="http://52.23.156.12:8087/contract/"+idEmployee+"/listaDeContractPorIdEmployee";

    const fetchData = useCallback(async () => {
      try {
        const response = await axios.get(url);
        console.log('Respuesta del servicio completa:', response);
  
        if (response.status === 200) {
            setListaContractPorIdEmployee(response.data);
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
  


  return [listaContractPorIdEmployee];
}