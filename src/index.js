import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';

class Formulario extends React.Component {
    
    state = {
       depositoHistory: [],
       saqueHistory: [],
       total:0
    }

    handleSubmit = transacao =>{
       
        if(transacao.tipo === "entrada"){
            let grana = 0;

            this.setState({
                depositoHistory: [...this.state.depositoHistory,transacao.valor]
            }, () => {
                for(let i = 0;i < this.state.depositoHistory.length ; i++){ 
                    grana = grana + parseInt(this.state.depositoHistory[i]);
                }
                this.setState({total:grana});
            });

        }else{
            let total;
            let saqueVar = document.getElementById("valor").value;
            
            if(saqueVar > this.state.total){
                alert("Valor maior do que o total")
            }else{
                this.setState({
                    saqueHistory: [...this.state.saqueHistory,transacao.valor]
                }, () =>{
                    let saque = this.state.saqueHistory[this.state.saqueHistory.length - 1];
                    total = parseInt(this.state.total) - saque;
                    this.setState({total:total});
                })
            }
        }
        
    }
    Saque(){
        let saque = [];
        for(let i = 0;i < this.state.saqueHistory.length ; i++){ 
            saque.push(<p>R$: {this.state.saqueHistory[i]}</p>);
        }
        return saque;
    }
    Deposito(){
        let deposito = [];
        for(let i = 0;i < this.state.depositoHistory.length ; i++){
            deposito.push(<p>R$: {this.state.depositoHistory[i]}</p>);
        }
        return deposito;
    }

    render(){
        return(
            <div>
                <div className="content" >     
                    <div className="col-md-4">
                        <center><h2>Historico Deposito</h2>{this.Deposito()}</center>
                    </div>       

                    <div className="col-md-4" id="form">
                        <center><h2>Controle de Gastos</h2></center>
                        <Form handleSubmit = {this.handleSubmit}/>
                    </div>
                    
                    <div className="col-md-4">
                        <center><h2>Historico Saque</h2>{this.Saque()}</center>
                    </div>
                </div>
                <div className="footer">
                    <div id="total">
                        <center>
                            <div className="col-md-1"></div>
                            <div className="col-md-1">
                                <p class="total">Total: </p>
                            </div>
                            <div className="col-md-1">
                                <p class="din">R$: {this.state.total}</p>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        )
    }  
}

ReactDOM.render(
    <Formulario />, document.getElementById('root')
);