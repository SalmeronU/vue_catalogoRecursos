<template>
    <div>
        <base-card>
            <base-button @click="cambiarTab('recursos-listados')" :mode="listadoRecursosBtn">
                Lista de recursos
            </base-button>
            <base-button @click="cambiarTab('agregar-recurso')" :mode="agregarRecursoBtn">
                Agregar Recurso
            </base-button>
        </base-card>
        <component @eliminar-recurso="eliminarRecurso" @guardar-recurso="guardarRecurso" :is="tabSeleccionada"></component>
    </div>
</template>

<script>
import RecursosListados from './recursosListados.vue';
import agregarRecurso from './agregarRecurso';
export default {
    computed:{
        listadoRecursosBtn(){
            return this.tabSeleccionada === 'recursos-listados' ? 'flat' : null
        },
        agregarRecursoBtn(){
            return this.tabSeleccionada === 'agregar-recurso' ? 'flat' : null
        }
    },
    provide(){
        return{
            recursos: this.recursos
        };
    },
    components:{RecursosListados,agregarRecurso},
    data(){
        return{
            tabSeleccionada: 'recursos-listados',
            recursos:[
                {
                    id:'vue-oficial',
                    titulo:'VueJS guía oficial',
                    descripcion: 'El website oficial de la documentación de VueJS',
                    link: 'https://vuejs.org'
                },
                {
                    id:'google-oficial',
                    titulo:'Google',
                    descripcion: 'El buscador en el que podemos encontrar cualquier recurso extra que necesitemos',
                    link: 'https://google.com'
                },
            ]
        };
    },
    methods:{
        cambiarTab(tab){
            this.tabSeleccionada = tab;
        },
        guardarRecurso(recursoNuevo){
            this.recursos.push(recursoNuevo);
            this.tabSeleccionada = 'recursos-listados'
        },
        eliminarRecurso(titulo){
            const recurso = this.recursos.find(recurso => recurso.titulo===titulo);
            this.recursos.splice(this.recursos.indexOf(recurso),1);
        }
    }
}
</script>