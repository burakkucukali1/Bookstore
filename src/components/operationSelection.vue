<template>
  <div>
    <div class="operationBox" :class="isBookOp">
      <br />
      <h2 style="text-align:center">
        <b>{{ isBookOp? "Book Store Operations" : "User Operations" }}</b>
      </h2>
      <div class="operationButtons">
        <button
          type="button"
          @click="goToOperations"
          class="btnStyle rounded-pill btn-lg btn-block"
        >{{ isBookOp? "Add New Book" : "Set To User" }}</button>
        <button
          type="button"
          @click="goToGetOperations"
          class="btnStyle rounded-pill btn-lg btn-block"
        >{{ isBookOp? "Book List" : "Get From User" }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "operationBox",
  data() {
    return {};
  },
  props: ["isBookOp"],
  methods: {
    goToOperations() {
      this.isBookOp
        ? this.$router.push("/add-new")
        : this.$router.push("/set-user");
    },
    goToGetOperations() {
      this.isBookOp
        ? this.$router.push("/bookList")
        : this.$router.push("/getBook");
    },
  },
};
</script>

<style>
.operationBox {
  color: #3f4441;
  border-radius: 1em;
  width: 520px;
  height: 350px;
  margin-top: 5%;
  background-image: linear-gradient(#c7b198, #dfd3c3);

  
}
.operationButtons {
  display: flex;
  flex-flow: column;
  margin-top: 15%;
  padding: 10px;
}
.btnStyle {
  color: cornsilk;
  background-color: #2F374E;
  font-size: 1.2em;
}
.btnStyle:hover {
  background-color: #c68c53;
  color: #411f1f ;
}
</style>