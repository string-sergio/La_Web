import axios from "axios";

const url = "https://elective-backend.herokuapp.com/auth/signin";

const state = {
  token: null,
};

const actions = {
  async login({ commit }, usuario) {
    const res = await axios.post(url, usuario);
    console.log(res);

    commit("setToken", res.token);
    localStorage.setItem("token", res.data);
    localStorage.setItem("usuario", usuario.email);
  },
  readToken({ commit }) {
    if (localStorage.getItem("token")) {
      commit("setToken", localStorage.getItem("token"));
    } else {
      commit("setToken", null);
    }
  },
  cerrarSesion({ commit }) {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    commit("setToken", null);
  },
};

const mutations = {
  setToken(state, payload) {
    state.token = payload;
  },
};

const getters = {
  comprobarLog: state => !!state.token
  
  
};

export default { state, getters, actions, mutations };
