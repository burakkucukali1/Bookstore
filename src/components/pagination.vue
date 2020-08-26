<template>
  <div v-if="pages>0" class="pagination-wrapper">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <span v-if="showPreviousLink()">
          <li @click="updatePage(currentPage-1)" class="d-inline-block page-item">
            <a class="page-link">Previous</a>
          </li>
        </span>
        <li @click="updatePage(index)" v-for="(item,index) in pages" :key="index" class="page-item">
          <a class="page-link" href="#">{{ index + 1 }}</a>
        </li>
        <span v-if="showNextLink()">
          <li @click="updatePage(currentPage+1)" class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </span>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapAction, mapActions } from "vuex";
export default {
  name: "pagination",
  data() {
    return {
      booksLength: this.$store.state.books.length,
    };
  },
  props: ["currentPage", "pages"],
  methods: {
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
      console.log(pageNumber);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == this.pages - 1 ? false : true;
    },
  },
};
</script>

<style >
</style>