import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

export const usePromedioSalarialPorBanda = () => {
    const [promedio, setPromedio] = useState([]);
    //const [listaPromedio ,setListaPromedio] =useState([]);
   
   // const url = 'http://localhost:8088/compensation/promedioSalarialPorBanda';
  
   const url = 'http://52.23.156.12:8088/compensation/promedioSalarialPorBanda';
     
      const fetchData = useCallback(async () => {
        try {
          const response = await axios.get(url);
          console.log('Respuesta del servicio completa:', response);
    
          if (response.status === 200) {
            setPromedio(response.data);
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
    
   

      return [promedio]
}


/*

  const fetchData = async () => {
          try {
            //CAMBIAR URL POR LA DEL DEPLOY 
             const response = await axios.get(url);
            console.log('Respuesta del servicio completa linea 163 :', response);
      
            if(response.status == 200){
            setPromedio(response.data); 
            console.log("datos manager linea 18 " , promedio);
          }      
          } catch (error) {
            // Manejar errores en caso de que la solicitud falle
            console.error('Error al obtener datos:', error);
          }
         
        };
        // Llamar a la función fetchData al montar el componente (usando un arreglo vacío como segundo argumento)
        fetchData();
      }, []); 

*/