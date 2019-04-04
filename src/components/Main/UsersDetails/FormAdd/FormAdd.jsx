import React, { Component } from 'react';
class FormAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre: '',
            apellido:''
         }
    }
    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount(){
        this.setState({
            nombre: ""
        })
    }
    render() { 
        const {nombre} = this.state;
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="nombre" onChange={this.handleInput}/>
                <button>Enviar</button>
                <label htmlFor="">{nombre}</label>
                
                </form>
            </div>
         );
    }
}
 
export default FormAdd;