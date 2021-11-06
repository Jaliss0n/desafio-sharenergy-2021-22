import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import "./postCliente.css"
 
class Forme extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            cliente: {
                nomeCliente:"",
                usinaId: "",
                percentualDeParticipacao: "",
               
            },
            erro: null,
            redirect: false
        };
    }
 
    exibeErro() {
        const { erro } = this.state;
 
        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }
 
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/getClientes" />;
        } else {
            return (
                <div className ="formulario">
                    <Form onSubmit={this.handleSubmit} >
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="nomeCliente">Nome Cliente </Form.Label>
                                <Form.Control
                                type="text" 
                                id="nomeCliente" 
                                name="nomeCliente" 
                                placeholder="Escreva seu primeiro nome"
                                minLength="1"
                                maxLength="100"
                                required
                                value={this.state.cliente.nomeCliente}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="usinaId">Numero da Usina </Form.Label>
                                <Form.Control
                                type="text" 
                                id="usinaId" 
                                name="usinaId" 
                                placeholder="Ex: 1"
                                minLength="1"
                                maxLength="100"
                                required
                                value={this.state.cliente.usinaId}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="percentualDeParticipacao">Percentual de Participação na Usina</Form.Label>
                                <Form.Control
                                type="text" 
                                id="percentualDeParticipacao" 
                                name="percentualDeParticipacao" 
                                placeholder="Ex: 30"
                                minLength="1"
                                maxLength="100"
                                required
                                value={this.state.cliente.percentualDeParticipacao}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <br/>
                    <div className="btn-cadastrar">
                        <button type="submit" className="btn btn-primary">
                            Cadastrar
                        </button>
                        </div>            
                </Form>
                </div>
            );
        }
    }
 
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
 
        this.setState(prevState => ({
            cliente: { ...prevState.cliente, [name]: value }
        }));
        console.log(value);
    };
 
    handleSubmit = event => {
        fetch("http://localhost:3003/sistema/cliente", {
            method: "post",
            body: JSON.stringify(this.state.cliente),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));
 
        event.preventDefault();
    };
}
 
export default Forme;
