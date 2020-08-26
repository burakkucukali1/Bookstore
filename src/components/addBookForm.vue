<template>
<div id="backgroundBookList">
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="addStyle d-flex flex-column w-50 mt-4 p-5">
        <div class="d-flex justify-content-between">
          <h3>Add New Book</h3>
          <div>
            <router-link :to="'/'" tag="a">return home page</router-link>
          </div>
        </div>
        <div>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(submitForm)">
              <div class="row mt-3">
                <div class="col-12 mt-3">
                  <label>Book Name</label>
                  <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                    <input type="text" class="w-100 h-75 rounded-pill" placeholder="  Please enter book name" v-model="bookName" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 mt-3">
                  <label>Author</label>
                  <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                    <input type="text" class="w-100  h-75 rounded-pill" placeholder="  Please enter author" v-model="author" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 mt-3">
                  <label>Image</label>
                  <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                    <input type="text" class="w-100 h-75 rounded-pill" placeholder="  Book Input URL" v-model="imageUrl" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <button type="submit" class="btnStyle m-3 mt-4 h-75 rounded-pill mx-auto d-block w-50">Save</button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "formComp",
  data() {
    return {
      id: new Date().getTime(),
      bookName: "",
      author: "",
      imageUrl: "",
      inStore: true,
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    submitForm() {
      const formAddingData = {
        bookId: this.id,
        bookName: this.bookName,
        author: this.author,
        imageUrl: this.imageUrl,
        inStore: this.inStore,
      };
      this.$emit("onAddSubmit", formAddingData);
      this.clearForm();
    },
    clearForm() {
      this.bookName = "";
      this.author = "";
      this.imageUrl = "";
    },
  },
};
</script>
<style  scoped>
a {
  color: brown;
}
a:hover {
  color: whitesmoke;
}
</style>

<style>
.addStyle {
  background-color: #c7b198;
  border-radius: 5px;

}
#backgroundBookList {
   height: 100vh;
  background-image: url("../assets/bookStore-background3.jpg");
  background-size: 100% 100%;
  background-color: rgba(238, 238, 238, 0.3) !important;
  background-blend-mode: color;
}
</style>