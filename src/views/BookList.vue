<template>
  <div id="backgroundBookList">
    <div class="container">
      <div class="bookList1 px-5 py-5">
        <div class="d-flex justify-content-between">
          <div>
            <h4>
              <b>Book List</b>
            </h4>
          </div>
          <div>
            <router-link :to="'/'" tag="a">return home page</router-link>
          </div>
        </div>
        <div></div>
        <div class="d-flex flex-column">
          <bookListItem
            v-for="(item,index) in visibleItems"
            :key="index"
            :bookId="item.bookId"
            :inStore="item.inStore"
            :bookName="item.bookName"
            :author="item.author"
            :imgUrl="item.imgUrl"
            @delete-book="deleteBook(item.bookId)"
          />
        </div>
        <pagination @page:update="updatePage" :pages="pages" :currentPage="currentPage" />
      </div>
    </div>
  </div>
</template>

<script>
import bookListItem from "../components/bookListItem";
import pagination from "../components/pagination";
import { mapActions } from "vuex";

export default {
  name: "BookList",
  data() {
    return {
      bookList: this.$store.state.books,
      pageLimit: 3,
      currentPage: 0,
      visibleItems: [],
      pages: "",
      isShow: false,
    };
  },
  methods: {
    ...mapActions({
      delete: "deleteBook",
    }),
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleItems();
    },
    updateVisibleItems() {
      this.visibleItems = this.bookList.slice(
        this.currentPage * this.pageLimit,
        this.currentPage * this.pageLimit + this.pageLimit
      );
      if (this.visibleItems.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    },
    deleteBook(selectedBookid) {
      this.delete(selectedBookid);
      this.updateVisibleItems();
    },
  },
  created() {
    this.pages = Math.ceil(this.bookList.length / 3);
    console.log(this.pages);
    this.updateVisibleItems();
  },
  components: {
    bookListItem,
    pagination,
  },
};
</script>

<style scoped>
a {
  color: brown;
}
a:hover {
  color: whitesmoke;
}
.booklist{
    margin-top: 20vh;
}
.bookList1 {

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