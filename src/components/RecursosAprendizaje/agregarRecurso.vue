<template>
    <div>
        <base-dialog title="Datos invalidos" v-if="inputNoEsValido">
            <template #default>
                <h2>Favor de llenar todos los campos antes de continuar...</h2>
            </template>
            <template #actions>
                <base-button @click="cerrarDialog">Entendido</base-button>
            </template>
        </base-dialog>
        <base-card>
            <h2>Agregar Recurso</h2>
            <form  @submit.prevent="guardarRecurso">
                <div class="form-control">
                    <label for="title">Titulo</label>
                    <input v-model="recursoNuevo.titulo" type="text" name="title" id="title">
                </div>
                 <div class="form-control">
                    <label for="Descripcion">Descripcion</label>
                    <textarea v-model="recursoNuevo.descripcion" name="Descripcion" id="Descripcion" rows="3"></textarea>
                </div>
                <div class="form-control">
                    <label for="Enlace">Enlace</label>
                    <input v-model="recursoNuevo.enlace" type="url" name="Enlace" id="Enlace">
                </div>
                <div>
                    <base-button :type="submit">Agregar recurso</base-button>
                </div>
            </form>
        </base-card>
    </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'
import BaseCard from '../UI/BaseCard.vue'
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseCard, BaseButton, BaseDialog},
  data(){
      return {
          recursoNuevo:{
              titulo:'',
              descripcion:'',
              enlace:''
          },
          inputNoEsValido: false
      };
  },
  methods:{
      guardarRecurso(){
          if(this.recursoNuevo.titulo.trim() === '' || this.recursoNuevo.descripcion.trim() === '' || this.recursoNuevo.enlace.trim() === ''){
              this.inputNoEsValido = true;
              return;
          }
          this.$emit('guardar-recurso',this.recursoNuevo);
      },
      cerrarDialog(){
          this.inputNoEsValido = false;
      }
  }
}
</script>

<style scoped>
    label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }

    input,
    textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
    }

    .form-control {
    margin: 1rem 0;
    }
</style>