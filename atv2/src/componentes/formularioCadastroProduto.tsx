import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroProduto extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <h2> Cadastro de Produto </h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_produto" type="text" className="validate" />
                            <label htmlFor="nome_produto">nome</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="preco_produto" type="number" className="validate" />
                            <label htmlFor="preco_produto">preço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action" onClick={(e) => this.props.seletorView("Produtos", e)}>Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}
