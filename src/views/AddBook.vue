<template>
  <div>
    <addBookForm @onAddSubmit="save" />
  </div>
</template>

<script>
import addBookForm from "../components/addBookForm.vue";
import { mapActions } from "vuex";
import Vue from "vue";

export default {
  name: "Add",
  components: {
    addBookForm,
  },
  methods: {
    ...mapActions({
      add: "addBook",
    }),
    save(formData) {
      this.add(formData);
      this.$toast("Book added to the list");
    },
  },
};
</script>

<style>
</style>