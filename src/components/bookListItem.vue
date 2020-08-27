<template>
  <div class="bookItem d-flex justify-content-between border px-3 mb-3">
    <div class="d-flex justify-content-start pt-3 pb-3">
      <div class>
        <img class="rounded w-100" src="https://via.placeholder.com/150/771796" alt />
      </div>
      <div class="d-flex flex-column ml-2">
        <h3>{{ bookName }}</h3>
        <h6 style="color:#8c8c8c">{{ author }}</h6>
      </div>
    </div>
    <div class="d-flex flex-column align-self-center align-items-center mt-3">
      <button
        :class="inStore"
        :style="inStore?inStoreStyle:atUserStyle"
        class="rounded-pill py-1 pl-3 pr-3"
      >
        <b>{{ inStore? 'In Store':'At User' }}</b>
      </button>
      <a v-if="inStore" @click="confirmation" class="mt-2" style="color:red">Delete</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "bookListItem",
  data() {
    return {
      inStoreStyle: {
        color: "#264700",
        background: "#91d18b",
      },
      atUserStyle: {
        color: "#800000",
        background: "#ca8b8b",
        border: "3px solid red",
      },
    };
  },
  methods: {
    ...mapActions({
      delete: "deleteBook",
    }),
    confirmation() {
      if (confirm(`Are you sure you want to delete the ${this.bookName}`)) {
        this.$emit("delete-book")
          this.$toast(`${this.bookName} deleted.`);
      } else {
        return false;
      }
    },
  },
  props: ["bookId", "inStore", "bookName", "author", "imgUrl"],
};
</script>

<style>
.status {
  width: 150px;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
}
.bookItem {
  background-color: #dfd3c3;
  border-radius: 1em;
}
</style>