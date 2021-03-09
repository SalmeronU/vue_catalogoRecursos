<template>
    <ul>
        <item-recurso @eliminar-recurso="eliminarRecurso" v-for="recurso in recursos" :key="recurso.id"
        :titulo="recurso.titulo"
        :descripcion="recurso.descripcion"
        :enlace="recurso.link">
        </item-recurso>
    </ul>
</template>

<script>
import ItemRecurso from './itemRecurso';
export default {
    components:{
        ItemRecurso,
    },
    inject:['recursos'],
    methods:{
        eliminarRecurso(titulo){
            this.$emit('eliminar-recurso',titulo);
        }
    }
}
</script>

<style scoped>
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
    }
</style>