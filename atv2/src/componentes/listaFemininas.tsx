/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
        
}


export default class ListaFemininas extends Component<props> {
    render() {
        return (
            <div className="collection">
                <h2> Todas as clientes femininas: </h2>
                <div className="collection-item">
                    Cliente 1 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: <br/>
                    Total Gasto:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 2 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: <br/>
                    Total Gasto:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 3 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: <br/>
                    Total Gasto:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 4 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: <br/>
                    Total Gasto:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 5 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: <br/>
                    Total Gasto:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
}