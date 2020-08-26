<template>
<div id="backgroundSettings">
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="settingsStyle d-flex flex-column w-50 mt-4 border-white p-5">
        <div class="d-flex justify-content-between">
          <h3>Set to User</h3>
          <div>
            <router-link :to="'/'" tag="a">return home page</router-link>
          </div>
        </div>
        <div>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(submitForm)">
              <div class="row mt-3">
                <div class="col-12">
                  <label>Select Book</label>
                  <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                    <select class="w-100 px-1 py-1 h-75 rounded-pill" v-model="selectedBook">
                      <option :value="''" disabled selected> Please Select a book</option>
                      <option
                        v-for="(item,index) in getAvailableBooks"
                        :value="item"
                        :key="index"
                      >{{ item.bookName }}</option>
                    </select>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-12 mt-3">
                  <label>Insert User ID</label>
                  <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                    <input type="text" class="w-100 h-75 rounded-pill" placeholder="  Please insert user identity number" v-model="userId" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 mt-3">
                  <label>User Name</label>
                  <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                    <input type="text" class="w-100 h-75 rounded-pill" placeholder="  Please enter user name and surname" v-model="userName" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 mt-3">
                  <label>User Address</label>
                  <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                    <textarea name class="w-100 rounded" rows="3" placeholder="  Please enter user address" v-model="address"></textarea>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-12">
                  <button type="submit" class="btnStyle m-3 h-75 rounded-pill mx-auto d-block w-50">Set to User</button>
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
import { mapGetters } from "vuex";
export default {
  name: "SetUserForm",
  data() {
    return {
      selectedBook: "",
      userId: "",
      userName: "",
      address: "",
      availableBooks: "",  
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    ...mapGetters(["getAvailableBooks"]),
  },
  methods: {
    submitForm() {
      const formSettingData = {
        selectedBook: this.selectedBook.bookName,
        id: this.userId,
        name: this.userName,
        address: this.address

      };
      this.$emit("onSetSubmit", formSettingData);
      this.clearForm();
    },
    clearForm() {
      this.selectedBook = "";
      this.userId = "";
      this.userName = "";
      this.address = "";
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
.settingsStyle{
  background-color: #c7b198;
  border-radius: 5px;
}
#backgroundSettings {
   height: 100vh;
  background-image: url("../assets/bookStore-background3.jpg");
  background-size: 100% 100%;
  background-color: rgba(238, 238, 238, 0.3) !important;
  background-blend-mode: color;
}
</style>