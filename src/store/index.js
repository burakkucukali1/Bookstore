import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'vuejsBootcamp'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [
      {
        bookId: 1,
        bookName: "Çalıkuşu",
        author: "Reşat Nuri Güntekin",
        ImgUrl: "https://via.placeholder.com/150/771796",
        inStore: false

      },
      {
        bookId: 257,
        bookName: "Sefiller",
        author: "Victor Hugo",
        ImgUrl: "https://via.placeholder.com/150/771796",
        inStore: true

      },
      {
        bookId: 3,
        bookName: "Suç ve Ceza",
        author: "Dostoyevski",
        ImgUrl: "https://via.placeholder.com/150/771796",
        inStore: false
      },
      {
        bookId: 4,
        bookName: "Harry Potter",
        author: "J.K. Rowling",
        ImgUrl: "https://via.placeholder.com/150/771796",
        inStore: true
      },
      {
        bookId: 5,
        bookName: "Sarmal",
        author: "Murat Ağırel",
        ImgUrl: "https://via.placeholder.com/150/771796",
        inStore: false

      },
      {
        bookId: 6,
        bookName: "Kürk Mantolu Madonna",
        author: "Sabahattin Ali",
        ImgUrl: "https://via.placeholder.com/150/771796",
        inStore: true
      }
    ],
    users: [
      {
        id: "61", 
        name: "Resul Ayar",
        address: "Sürmene Trabzon",
        selectedBook: "Çalıkuşu"
      },
      {
        id: "62", 
        name: "Burak Kali",
        address: "sultangazi istanbul",
        selectedBook: "Suç ve Ceza"
      },
      {
        id: "15", 
        name: "Aykut Yıldırım",
        address: "Bulgaristan",
        selectedBook: "Sarmal"
      }
    ],
  },
  getters: {
    getAvailableBooks(state) {
      return state.books.filter(b => b.inStore === true)
    },
    getUser(state) {
      return state.users
    }
  },
  mutations: {
    SET_BOOK(state, payload) {
      console.log(payload)
      state.books.push(payload)
    },
    SET_USER(state, payload) {
      state.users.push(payload)
    },
    SET_BOOK_STATUS(state, payload) {
      const index = state.books.findIndex(b => b.bookName === payload)
      state.books[index].inStore = false;
    },
    DELETE_BOOK(state, payload) {
      const index = state.books.findIndex(b => b.bookId === payload)
      state.books.splice(index, 1)
    },
    GET_FROM_USER(state, payload) {
      const index =state.books.findIndex(b=>b.bookName===payload)
      state.books[index].inStore=true;

      const indexUser = state.users.findIndex(u=>u.selectedBook===payload)
       state.users[indexUser].selectedBook=""; 
    },
  },
  actions: {
    addBook({ commit }, data) {
      commit('SET_BOOK', data)
    },
    setToUser({ commit }, userData) {
      const selectedBookName = userData.selectedBook

      commit('SET_USER', userData)
      commit('SET_BOOK_STATUS', selectedBookName)
    },
    deleteBook({ commit }, bookId) {
      commit('DELETE_BOOK', bookId)
    },
    getBookFromUser({ commit }, takenBookName) {
      commit('GET_FROM_USER', takenBookName)
    },
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
