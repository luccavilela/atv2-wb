import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class Home extends Component<props> {
    render() {
        return (
            <div className="collection">
                <h2> Bem vindo à aplicação web da World Beauty ! </h2>
                <h3> Aqui você poderá gerenciar os clientes, produtos e serviços ! </h3>
                <h3> Utilize a navbar para navegação. </h3>
            </div>
        )
    }
}