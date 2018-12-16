import React, { Component } from 'react';
import Resultado from './Resultado';


class Resumen extends Component{

    mostrar = ()=>{
        const {marca,year,plan} = this.props.datos    

        if(!marca || !year || !plan){
            return null

        }

        return(
            <div className="resumen">
        <h2>Resumen de cotizaciones</h2>
        <li>Marca : {marca}</li>
        <li> Año : {year}</li>
        <li> Plan : {plan}</li>   
        </div>

        )

    }


    render(){

     

        return(
           <div>
        {this.mostrar()}
        <Resultado
        
        resultadojeje = {this.props.resultado}

        />
           </div> 
        )


    }



}

export default Resumen;