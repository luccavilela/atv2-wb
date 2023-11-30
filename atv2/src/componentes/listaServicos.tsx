/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
        
}


export default class ListaServicos extends Component<props> {
    render() {
        return (
            <div className="collection">
                <h2> Lista de todos os serviços </h2>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Cadastrar Serviço", e)}
                >
                    Cadastrar um serviço
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Listar serviços mais consumidos", e)}
                >
                    Listar os serviços mais consumidos
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Listar serviços mais consumidos por homens", e)}
                >
                    Listar os serviços mais consumidos por homens
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => this.props.seletorView("Listar serviços mais consumidos por mulheres", e)}
                >
                    Listar os serviços mais consumidos por mulheres
                </button>
                <div className="collection-item">
                    Servico 1
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Servico 2
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Servico 3
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Servico 4
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
}