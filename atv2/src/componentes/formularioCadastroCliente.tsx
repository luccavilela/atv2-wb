import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroCliente extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <h2> Cadastro de Cliente </h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6">
                            <input id="nome_social" type="text" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="rg" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6">
                            <p>
                                <label>
                                    <input name="genero" type="radio" value="masculino" />
                                    <span>Gênero Masculino</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="genero" type="radio" value="feminino" />
                                    <span>Gênero Feminino</span>
                                </label>
                            </p>
                        </div>                                                     
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action" onClick={(e) => this.props.seletorView("Clientes", e)}>Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}
