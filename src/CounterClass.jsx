import React, { Component } from "react";

import { connect } from "redux-zero/react";
import actions from "./redux/actions";

class Counter extends Component {
    render() {
        return (
            <div>

                <h1>Componente Class</h1>
                
                <p>Valor = {this.props.count}</p>
                <p>Nome = {this.props.nome}</p>

                <button onClick={e => this.props.decrementOf(1)}>menos 1</button>
                <button onClick={e => this.props.zerar()}>zerar</button>

                <br/><input type="text" onChange={e=>this.props.setStore("nome",e.target.value)} value={this.props.nome}/>
                
            </div>
        );
    }
}

export default connect(store => store, actions)(Counter)
