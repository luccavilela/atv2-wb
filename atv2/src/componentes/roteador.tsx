import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import Home from "./home";
import "../styles.css"
import ListaProdutos from "./listaProdutos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaServicos from "./listaServicos";
import FormularioCadastroServico from "./formularioCadastroServico";
import EditarCliente from "./editarCliente";
import EditarProduto from "./editarProduto";
import EditarServico from "./editarServico";
import TopMaiorConsumoClientes from "./topMaisConsumoClientes";
import TopMenorConsumoClientes from "./topMenorConsumoClientes";
import TopMaiorGastoClientes from "./topMaiorGastoClientes";
import ListaMasculinos from "./listaMasculinos";
import ListaFemininas from "./listaFemininas";
import TopProdutosMaisConsumidos from "./topProdutosMaisConsumidos";
import TopProdutosHomens from "./topProdutosHomens";
import TopProdutosMulheres from "./topProdutosMulheres";
import TopServicosMaisConsumidos from "./topServicosMaisConsumidos";
import TopServicosHomens from "./topServicosHomens";
import TopServicosMulheres from "./topServicosMulheres";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
        switch (this.state.tela) {
            case 'Home':
                return (
                    <>
                        {barraNavegacao}
                        <Home tema="purple lighten-4" />
                    </>
                );
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <ListaCliente seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Cadastrar Cliente':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroCliente seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Editar Cliente':
                return (
                    <>
                        {barraNavegacao}
                        <EditarCliente seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar 10 clientes que mais consumiram':
                return (
                    <>
                        {barraNavegacao}
                        <TopMaiorConsumoClientes seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar 10 clientes que menos consumiram':
                return (
                    <>
                        {barraNavegacao}
                        <TopMenorConsumoClientes seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar 5 clientes que mais gastaram':
                return (
                    <>
                        {barraNavegacao}
                        <TopMaiorGastoClientes seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar clientes masculinos':
                return (
                    <>
                        {barraNavegacao}
                        <ListaMasculinos seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar clientes femininas':
                return (
                    <>
                        {barraNavegacao}
                        <ListaFemininas seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );

            case 'Produtos':
                return (
                    <>
                        {barraNavegacao}
                        <ListaProdutos seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                )
            case 'Editar Produto':
                return (
                    <>
                        {barraNavegacao}
                        <EditarProduto seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Cadastrar Produto':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroProduto seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar produtos mais consumidos':
                return (
                    <>
                        {barraNavegacao}
                        <TopProdutosMaisConsumidos seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar produtos mais consumidos por homens':
                return (
                    <>
                        {barraNavegacao}
                        <TopProdutosHomens seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar produtos mais consumidos por mulheres':
                return (
                    <>
                        {barraNavegacao}
                        <TopProdutosMulheres seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );

            case 'Serviços':
                return (
                    <>
                        {barraNavegacao}
                        <ListaServicos seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                )
            case 'Cadastrar Serviço':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroServico seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Editar Serviço':
                return (
                    <>
                        {barraNavegacao}
                        <EditarServico seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar serviços mais consumidos':
                return (
                    <>
                        {barraNavegacao}
                        <TopServicosMaisConsumidos seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar serviços mais consumidos por homens':
                return (
                    <>
                        {barraNavegacao}
                        <TopServicosHomens seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
            case 'Listar serviços mais consumidos por mulheres':
                return (
                    <>
                        {barraNavegacao}
                        <TopServicosMulheres seletorView={this.selecionarView} tema="purple lighten-4" />
                    </>
                );
        }

    }
}