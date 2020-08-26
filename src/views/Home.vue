<template>
  <div class="home" id="backgroundHomePage">
    <div class="container">
      <div class="operations">
        <div class="ops">
        <operationSelection :isBookOp="true" />
        </div>
         <div class="ops">
        <operation-selection :isBookOp="false" />
 </div>
        
      </div>
    </div>
  </div>
</template>
<script>

import operationSelection from "../components/operationSelection.vue";
export default {
  name: "Home",
  components: {
    operationSelection
  },
};
</script>

<style scoped>
.ops {
  margin-top: 30vh;
}
.operations {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
#backgroundHomePage {
  height: 100vh;
  background-image: url("../assets/bookStore-background3.jpg");
  background-size: 100% 100%;
  background-blend-mode: color;
 
} 
</style>
