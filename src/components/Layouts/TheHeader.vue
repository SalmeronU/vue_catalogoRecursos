<template>
    <header>
        <h2>{{titulo}}</h2>
    </header>
</template>

<script>
export default {
    props:['titulo']
}
</script>

<style scoped>
    header {
    width: 100%;
    height: 5rem;
    background-color: #640032;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    header h2 {
    color: white;
    margin: 0;
    }
</style>