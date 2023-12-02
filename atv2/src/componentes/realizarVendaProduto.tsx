import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class RealizarVendaProduto extends Component<props>{
    render() {
        return (
            <div className="row">
                <h2> Realizar Venda de Produto</h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_produto" type="text" className="validate" placeholder="Nome do produto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="quantidade_venda" type="number" className="validate" placeholder="Quantidade comprada" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cpf_cliente" type="text" className="validate" placeholder="cpf do cliente" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="waves-effect waves-light btn cadastrar-botao botao-customizado" type="submit" name="action" onClick={(e) => this.props.seletorView("Clientes", e)}>Realizar Venda
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}






