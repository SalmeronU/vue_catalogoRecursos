<template>
    <div>
        <TheHeader :titulo="titulo" />
        <the-resources :recursos="recursos"></the-resources>
    </div>
</template>

<script>
import TheHeader from './Layouts/TheHeader.vue';
import TheResources from './RecursosAprendizaje/TheResources.vue';

export default {
    components:{
        TheHeader,
        TheResources
    },
    data(){
        return{
            titulo:'Vue: Catalogo de recursos de aprendizaje',
        };
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
    box-sizing: border-box;
    }

    html {
    font-family: 'Roboto', sans-serif;
    }

    body {
    margin: 0;
    }
</style>