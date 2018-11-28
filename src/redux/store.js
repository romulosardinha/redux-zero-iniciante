import createStore from "redux-zero";

const initialState = {
  count: 1,
  nome: "Seu nome"
};

const store = createStore(initialState);
export default store;
