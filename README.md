# # BOOKSTORE VUE.JS (frontend)

![4cuz8t](https://user-images.githubusercontent.com/51200138/91372100-6d13da00-e81b-11ea-94f9-d8b5fa7e3165.gif)

**Live Link:** https://burakkucukali1.github.io/Bookstore/

### Features
<hr>
The project implements simple bookstore features.

 - Adding to book to the store
 - Listing the books available in the store and in the user.
 - Assigning books to the user and getting books from the user.

### Used
<hr>

 - [Vue 2.6.11](https://github.com/vuejs/vue)
 - [Vue-Router 3.2.0](https://github.com/vuejs/vue-router)
 - [Vuex 3.4.0](https://github.com/vuejs/vuex)
 - [Vuex-persist 2.2.0](https://github.com/championswimmer/vuex-persist)
 - [Vue-toastification 1.7.6](https://github.com/Maronato/vue-toastification)
 - [Bootstrap 4.5.2](https://www.npmjs.com/package/bootstrap)

 
 ### Props
 <hr>
 
 |Prop|Component|Parent Component|Describe|
 |--|--|--|--|
 |bookId|bookListItem|BookList|ID of the book on the list
 |inStore|bookListItem|BookList|To check if the book is belongs to a user
 |bookName|bookListItem|BookList|Name of the book on the list
 |author|bookListItem|BookList|Author of the book on the list
 |imgUrl|bookListItem|BookList|URL of the book on the list
 |isBookOp|operationSelection|Home|To check whether the operation is for the book or the user 
 |currentPage|pagination|BookList| Current page in the list
 |pages|pagination|BookList|Total number of pages
 
 
 **Note:** 
 The default image URL(imgUrl) is used to not load a URL for the image input every time.
 
 
 ### Routes
 <hr>
 
  |Routes|Navigate To|
 |--|--|
 |/add-new|AddBook.vue|
 |/set-user|SetUser.vue|
 |/bookList|BookList.vue|
 
 
### Build Setup
<hr>

   > #install dependencies
 
    npm install
>serve with hot reload at localhost:8080

    npm run dev
>build for production with minification

    npm run build
>run unit tests

    npm run unit:test
    

### Roadmap
<hr>

 - Improve the design,  edit code to avoid duplicate code.
 - Maybe new features can be added.
 - Build  a rest api  with NodeJs for Bookstore.

 ### Author
 <hr>
 
   [Burak](https://github.com/burakkucukali1)


   

    	


