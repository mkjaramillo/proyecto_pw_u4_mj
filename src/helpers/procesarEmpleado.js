import axios from "axios";
//metodos fachada a exportas
const obtenerEmpleado=async(id)=>{
return await obtenerEmpleadoAxios(id);
}
const insertarEmpleado=async(body)=>{
   return await insertarEmpleadoAxios(body);
   }
   const actualizarEmpleado=async(body)=>{
      return await actualizarEmpleadoAxios(body);
   }
   const eliminarEmpleado=async(id)=>{
      return await eliminarEmpleadoAxios(id);
   } 

//metodos de consumo del api
const obtenerEmpleadoAPI=async(id)=>{
   const data=await fetch(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r=> r.json())
   console.log(data)
   return data

}
//get
const obtenerEmpleadoAxios=async(id)=>{
   const data = axios.get(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r=>r.data)
   console.log(data)
   return data 

}
//post
const insertarEmpleadoAxios=async(body)=>{
   //cabeceras
   const data = axios.post(`http://localhost:8085/APINomina/V1/empleados`,body).then(r=> r.data)
   console.log(data)
   return data 


}
//put
const actualizarEmpleadoAxios=async(body)=>{
   //cabeceras
   
   const data = axios.put(`http://localhost:8085/APINomina/V1/empleados`,body).then(r=> r.data)
   console.log(data)
   return data 


}
//delete
const eliminarEmpleadoAxios=async(id)=>{
   const data = axios.delete(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r=>r.data)
   console.log(data)
   return data 

}
export default obtenerEmpleado;insertarEmpleado;actualizarEmpleado;eliminarEmpleado;