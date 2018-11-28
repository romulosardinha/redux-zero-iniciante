import React from "react";

import { connect } from "redux-zero/react";
import actions from "./redux/actions";

const Counter = (props) => (
  <div>
    
    <h1>Componente Function</h1>

    <p>Valor = {props.count}</p>
    <p>Nome = {props.nome}</p>

    <button onClick={props.decrement}>decrement</button>
    <button onClick={props.increment}>increment</button>

  </div>
)

export default connect(store => store, actions)(Counter)