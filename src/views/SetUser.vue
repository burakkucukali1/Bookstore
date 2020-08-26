<template>
  <div>
       <setUserForm @onSetSubmit="setUser"/>
  </div>
</template>

<script>
import setUserForm from '../components/setUserForm.vue'
import { mapActions } from 'vuex'
export default {
  name:"setUser",
  components:{
    setUserForm
  },
  methods: {
    ...mapActions({
      set:'setToUser'
    }),
    setUser(formData){
      this.set(formData)
      this.$toast(`${formData.selectedBook} has been set for ${formData.name}.`);

    }
  }
}
</script>

<style>

</style>