<template>
  <div id="login">
    <Card>
        <template #title> {{ msg }} </template>
        <template #content>
            <p>
                Inicie sesion con su usuario IBM y contrasena
            </p>
            <div class="p-inputgroup flex-1">
              <span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
              </span>
              <InputText placeholder="Usuario" />
            </div>
            <br >
            <div class="p-inputgroup flex-1">
              <span class="p-inputgroup-addon">
                  <i class="pi pi-lock"></i>
              </span>
              <Password placeholder="Contrasena" :feedback="false" toggleMask />
            </div>  
            <br >
            <div class="p-input group flex-2">
              <Button @click="onSubmit" label="Iniciar sesion" icon="pi pi-check" iconPos="right" />
            </div>
        </template>

        
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthService from '../apis/authapi'


export default defineComponent({
  name: 'Login',
  props: {
    msg: String,
  },
  data () {
    return {
      form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
    }
  },
  methods: {
    async onSubmit(event: any) {
        event.preventDefault()
        // alert(JSON.stringify(this.form))
        await AuthService.login('jose','123');
      },
      onReset(event: any) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
   }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
#login{
  margin: 0 auto;
  width: 50%;
  padding: 10px;
}
</style>
