import axios from "axios";
import React, { useState , useEffect} from "react";
//import { useGetListaDeManager } from "./useGetListaDeManager";


// Recibe un idManager y trea la cantidad de empleados por ese manager
export const useCantidadEmpleadosPorManager=()=>{
  const [cantidad , setCantidad] = useState(0);

    const url='http://52.23.156.12:8085/employee/'+360869+'/managerYCantEmpleados';

    useEffect(() => {

  const fetchData = async () => {
    try {
      //CAMBIAR URL POR LA DEL DEPLOY 
       const response = await axios.get(url);
      console.log('Respuesta del servicio completa linea 163 :', response);

      if(response.status == 200){
        setCantidad(response.data); 
      console.log("datos manager linea 167 " + setCantidad);
      const l=[];

    }      
    } catch (error) {
      // Manejar errores en caso de que la solicitud falle
      console.error('Error al obtener datos:', error);
    }
  };
   
  // Llamar a la función fetchData al montar el componente (usando un arreglo vacío como segundo argumento)
  fetchData();
}, []); 

//console.log("getRetorno linea 189" + listaManager.toString);

return [cantidad]


    }









    /*
    
       const [cantidad , setCantidad] = useState(0);
       //const [listaManager ] = useGetListaDeManager();
       const [url, setUrl]=useState("");
      
       //const url="";
        const urlDinamica=(idManager)=>{
          setUrl('http://localhost:8085/employee/'+idManager+'/managerYCantEmpleados')
        }

       //const url='http://localhost:8085/employee/'+idManager+'/managerYCantEmpleados';
    
     useEffect(()=>{
        const fetchData =  () => {
          try {
         
             axios.get(url).then((value) =>{ 
                   //  console.log('Respuesta del servicio completa:', value);
              if(value.status==200){
                setCantidad(value.data);

              }
          })   
          } catch (error) {
            // Manejar errores en caso de que la solicitud falle
            console.error('Error al obtener datos:', error);
          }
        };// cierre fetchData  
          fetchData();
        },[]); // cierre  useEffect




        return {urlDinamica, cantidad};
    */