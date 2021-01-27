import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sneakers : [],
    korisnik : [],
    token : []
  },
  mutations: {

    set_token: function (state,token){
      state.token=token;
    },

    set_sneakers: function (state,sneakers){
      state.sneakers=sneakers;
    },

    add_sneakers: function(state,sneakers){
      state.sneakers.push(sneakers);
    },

    set_korisnik: function (state,korisnik){
      state.korisnik=korisnik;
    },

    add_korisnik: function(state,korisnik){
      state.korisnik.push(korisnik);
    },

    remove_sneakers: function (state, id) {
      for (let p = 0; p < state.sneakers.length; p++) {
        if (state.sneakers[p].id === id) {
          state.sneakers.splice(p, 1);
          break;
        }
      }
    },

    update_sneakers: function (state, payload) {
      for (let p = 0; p < state.sneakers.length; p++) {
        if (state.sneakers[p].id === parseInt(payload.id)) {
          state.sneakers[p].naziv = payload.pat.naziv;
          state.sneakers[p].model = payload.pat.model;
          state.sneakers[p].opis = payload.pat.opis;
          state.sneakers[p].velicina = payload.pat.velicina;
          state.sneakers[p].cena = payload.pat.cena;
          break;
        }
      }
    }
  },
  actions: {
      load_sneakers: function({commit}){
        fetch('http://localhost/api/patike', { method: 'get' }).then((response) => {
          if (!response.ok)
            throw response;

          return response.json()
        }).then((jsonData) => {
          commit('set_sneakers',jsonData);
        }).catch((error) => {
          if (typeof error.text === 'function')
            error.text().then((errorMessage) => {
              alert(errorMessage);
            });
          else
            alert(error);
        });
      },

      delete_sneakers: function({commit},id){
        fetch(`http://localhost/api/patike/${id}`, { method: 'delete' }).then((response) => {
          if (!response.ok)
            throw response;

          return response.json()
        }).then((jsonData) => {
          commit('remove_sneakers',jsonData.id);
        }).catch((error) => {
          if (typeof error.text === 'function')
            error.text().then((errorMessage) => {
              alert(errorMessage);
            });
          else
            alert(error);
        });

      },

      new_sneakers: function({commit},sneakers){
        fetch('http://localhost/api/patike', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: sneakers
        }).then((response) => {
          if (!response.ok)
            throw response;

          return response.json();
        }).then((jsonData) => {
          commit('add_sneakers', jsonData);
        }).catch((error) => {
          if (typeof error.text === 'function')
            error.text().then((errorMessage) => {
              alert(errorMessage);
            });
          else
            alert(error);
        });
      },


      new_korisnik: function({commit},korisnik){
        fetch('http://localhost/api/register', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: korisnik
        }).then((response) => {
          if (!response.ok)
            throw response;

          return response.json();
        }).then((jsonData) => {
          commit('add_korisnik', jsonData);
        }).catch((error) => {
          if (typeof error.text === 'function')
            error.text().then((errorMessage) => {
              alert(errorMessage);
            });
          else
            alert(error);
        });
      },


      login: function ({ commit }, korisnik) {

  fetch('http://localhost/api/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: korisnik
  }).then((response) => {
    if (!response.ok)
      throw response;

    return response.json();
  }).then((jsonData) => {
    localStorage.setItem('token', jsonData["token"]);
    commit('set_token', jsonData["token"]);
   // this.$router.push('/');
  }).catch((error) => {
    if (typeof error.text === 'function')
      error.text().then((errorMessage) => {
        alert(errorMessage);
      });
    else
      alert(error);
  });
},

      change_sneakers: function({ commit }, payload) {
        fetch(`http://localhost/api/patike/${payload.id}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: payload.pat
        }).then((response) => {
          if (!response.ok)
            throw response;

          return response.json();
        }).then((jsonData) => {
          commit('update_sneakers', {id: payload.id, pat:jsonData});
        }).catch((error) => {
          if (typeof error.text === 'function')
            error.text().then((errorMessage) => {
              alert(errorMessage);
            });
          else
            alert(error);
        });
      }



  }
})
