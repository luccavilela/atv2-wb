/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
        
}


export default class ListaCliente extends Component<props> {
    render() {
        return (
            <div className="collection">
                <h2> Lista de todos os clientes </h2>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Cadastrar Cliente", e)}
                >
                    Cadastrar um cliente
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Listar 10 clientes que mais consumiram", e)}
                >
                    Listar 10 clientes que mais consumiram
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Listar 10 clientes que menos consumiram", e)}
                >
                    Listar 10 clientes que menos consumiram
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Listar 5 clientes que mais gastaram", e)}
                >
                    Listar 5 clientes que mais gastaram
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Listar clientes masculinos", e)}
                >
                    Listar clientes masculinos
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Listar clientes femininas", e)}
                >
                    Listar clientes femininas
                </button>
                <div className="collection-item">
                    Cliente 1 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 2 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 3 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 4 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
}