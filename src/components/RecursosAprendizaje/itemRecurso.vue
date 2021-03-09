<template>
    <base-card>
        <li>
            <div class="header">
                <h3>{{titulo}}</h3>
                <base-button @click="eliminarRecurso" mode="flat">Eliminar</base-button>
            </div>
            <div>
                <h4>{{descripcion}}</h4>
                <nav>
                    <a :href="enlace">Ir al recurso</a>
                </nav>
            </div>
        </li>
    </base-card>
</template>
<script>

export default {
    props:['titulo','descripcion','enlace'],
    methods:{
        eliminarRecurso(){
            this.$emit('eliminar-recurso',this.titulo);
        }
    }
}
</script>

<style scoped>
    li {
    margin: auto;
    max-width: 40rem;
    }

    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    }

    p {
    margin: 0.5rem 0;
    }

    a {
    text-decoration: none;
    color: #ce5c00;
    }

    a:hover,
    a:active {
    color: #c89300;
    }
</style>