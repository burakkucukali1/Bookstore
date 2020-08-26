<template>
<div id="backgroundgettingArea">
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="gettingAreaStyle d-flex flex-column w-50 mt-4 p-5">
        <div class="d-flex justify-content-between">
          <h3>Get from User</h3>
          <div>
            <router-link :to="'/'" tag="a">return home page</router-link>
          </div>
        </div>
        <div class="d-flex flex-column align-item-center">
          <form @submit.prevent="getFromUser">
            <div class="row mt-3">
              <div class="col-12">
                <label>Select Book</label>
                <select class="w-100 px-1 py-1 rounded-pill" @change="onChange($event)" v-model="selectedBook">
                  <option :value="''" disabled selected>Please Select a book</option>
                  <option
                    v-for="(item,index) in books"
                    :value="item"
                    :key="index"
                  >{{ item.bookName }}</option>
                </select>
                <div class="resultArea rounded">
                  <p>{{ userName }}</p>
                  <p>{{ userAdress }}</p>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <button type="submit" class="btnStyle mt-5 h-50 rounded-pill mx-auto d-block w-50">Get from User</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "GetBook",
  data() {
    return {
      selectedBook: "",
      books: this.$store.state.books.filter((p) => p.inStore == false),
      userName: "",
      userAdress: "",
      bookId: "",
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions({
      getBook: "getBookFromUser",
    }),
    onChange() {
      console.log(this.selectedBook.bookName);
      const index = this.getUser.findIndex(
        (u) => u.selectedBook === this.selectedBook.bookName
      );
      this.userName = this.$store.state.users[index].name;
      console.log(this.$store.state.users[index]);
      this.userAdress = this.$store.state.users[index].address;
    },
    getFromUser() {
      this.getBook(this.selectedBook.bookName);
      this.$toast( `${this.selectedBook.bookName} gotten from ${this.userName}.` );

      this.selectedBook = "";
      this.userName = "";
      this.userAdress = "";
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
.resultArea {
  margin-top: 5vh;
  height: 10em;
  background-color: rgb(255, 236, 224);
}
#backgroundgettingArea {
   height: 100vh;
  background-image: url("../assets/bookStore-background3.jpg");
  background-size: 100% 100%;
  background-color: rgba(238, 238, 238, 0.3) !important;
  background-blend-mode: color;
}
.gettingAreaStyle{
  background-color: #c7b198;
  border-radius: 5px;
}
</style>