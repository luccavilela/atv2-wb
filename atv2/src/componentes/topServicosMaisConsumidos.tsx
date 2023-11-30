/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
        
}


export default class TopServicosMaisConsumidos extends Component<props> {
    render() {
        return (
            <div className="collection">
                <h2> Serviços mais comprados: </h2>
                <div className="collection-item">
                    Serviço 1 <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 2 <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 3 <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 4 <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 5 <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => this.props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
}