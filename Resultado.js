import React, { Component } from 'react';
import{TransitionGroup, CSSTransition} from 'react-transition-group';
class Resultado extends Component{


render(){

    const resultado = this.props.resultados
    const mensaje  = (!resultado) ? "Elige marca,año y plan" : "El total es $"

    return(

        <div className = "gran-total">
        {mensaje}
        <h2>{resultado}</h2>


        </div>
       
    )



}


}

export default Resultado
