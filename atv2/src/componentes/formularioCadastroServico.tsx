import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroServico extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_servico" type="text" className="validate" />
                            <label htmlFor="nome_servico">nome</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="preco_servico" type="number" className="validate" />
                            <label htmlFor="preco_servico">preço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action" onClick={(e) => this.props.seletorView("Serviços", e)}>Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}
