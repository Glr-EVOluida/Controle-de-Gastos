import React, {Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props);
        
        this.initialState = {
            valor:"",
            tipo:"entrada"
        };

        this.state = this.initialState;
    }


    handleChange = event =>{
        const {name,value} = event.target;

        this.setState({
            [name] : value
        })
    }

    handleSubmit = () =>{
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const { valor, tipo } = this.state;
        return(
            <form>
                <input className="form form-control" id="valor" name="valor" value={valor} type="text" onChange={this.handleChange}/><br/>

                <select className="form-control" value={tipo} name="tipo" id="tipo" onChange={this.handleChange}>
                    <option value="entrada">Deposito</option>
                    <option value="saque">Saque</option>
                </select><br/>
                
                <input type="button" onClick={this.handleSubmit} value="Enviar" className="form-control btn btn-primary"/>
            </form>
        )
    }
}

export default Form;