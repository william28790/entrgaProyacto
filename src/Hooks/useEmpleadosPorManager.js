import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

export const useEmpleadosPorManager = () => {
    const [listaEmpleadosPorManager, setListaEmpleadosPorManager] = useState([]);
     //const url='http://localhost:8085/employee/searchAutocomplete';
   // const url = 'http://52.23.156.12:8085/employee/empleadosPorManager';
   const url = 'http:// ec2-52-23-156-12.compute-1.amazonaws.com:8085/employee/empleadosPorManager';
    
   const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      console.log('Respuesta del servicio completa:', response);

      if (response.status === 200) {
        setListaEmpleadosPorManager(response.data);
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



      return [listaEmpleadosPorManager]
}



/*
useEffect(() => {
     
        // llamado al servicio de compensacion 
        const fetchData = async () => {
          try {
            //CAMBIAR URL POR LA DEL DEPLOY 
             const response = await axios.get(url);
            console.log('Respuesta del servicio completa  :', response);
      
            if(response.status == 200){
                setListaEmpleadosPorManager(response.data); 
            console.log("datos listaEmpleadosPorManager " , listaEmpleadosPorManager);
    
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



 //const [listaPromedio ,setListaPromedio] =useState([]);
   // const [listaAux]=useState([]);

       // CARGAMOS LA LISTA DE PROMEDIO QUE NOS DA EL SERVICIO 
            
          /*       promedio.forEach(p => {
            const aux ={
                banda:p[0] ,
                promedio:p[1]
            };

            listaPromedio.push(aux);
        })*/
          