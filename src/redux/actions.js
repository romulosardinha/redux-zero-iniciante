const actions = store => ({

  increment: state => ({ count: state.count + 1 }),
  decrement: state => ({ count: state.count - 1 }),
  
  decrementOf: (state, valor) => ({ count: state.count - valor }),
  incrementOf: (state, valor, i) => {
    console.log("teste de action com demais atividades internas", state, valor, i);
    return { count: state.count + valor };
  },

  zerar: () => ({ count: 0 }),

  setStore : (state, chave,valor) => ({[chave]:valor}),
});

export default actions;
