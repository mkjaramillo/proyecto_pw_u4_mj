<template>
  <input v-model="id" type="text"/>
  <input v-model="nombre" type="text"/>
  <button @click="consultar">consultar</button>
  <button @click="insertar">insertar</button>
  <button @click="actualizar">actualizar</button>
  <button @click="eliminar">eliminar</button>


</template>

<script>
    import {obtenerEmpleado,insertarEmpleado,actualizarEmpleado,eliminarEmpleado} from "../helpers/procesarEmpleado.js"
export default {
    data(){
        return{
            id:null,
            nombre:null
        }

    },
    methods: {
    async consultar() {
      await obtenerEmpleado(this.id);
  
    },
    
    async insertar() {
        const empl = {
      id: this.id,
      nombre: this.nombre,
      apellido: "Jaramillo",
      fechaNacimiento: "2022-08-24T00:00:00",
      salario: 250,
    };
      await insertarEmpleado(empl);
    },
    async actualizar() {
        const empl = {
      id: this.id,
      nombre: this.nombre,
      apellido: "Jaramillo",
      fechaNacimiento: "2022-08-24T00:00:00",
      salario: 250,
    };
      await actualizarEmpleado(empl);
    },
    async eliminar() {
      await eliminarEmpleado(this.id);
    },
  },
}
</script>

<style>

</style>