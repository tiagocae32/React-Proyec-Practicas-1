import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
//import  '../css/estilos.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resumen from './componentes/Resumen';
import {obtenerDiferenciaAnio,calcularMarca,obtenerPlan} from './Helper';



class App extends Component {


  state = {
    resultado : "",
    datos : []
  }

  cotizarSeguro = (datos)=>{

    const {marca,plan, year} = datos;


    //base de 200
    let resultado = 2000;

    //obtener la diferencia de años y por cada año descontar un 3 por ciento

    const diferencia = obtenerDiferenciaAnio(year);
    resultado -= ((diferencia * 3) * resultado) /100;
    
    resultado = calcularMarca(marca) * resultado
    let incrementoPlan = obtenerPlan(plan);
    console.log(incrementoPlan)

    resultado = parseFloat(incrementoPlan * resultado).toFixed(2)
    console.log(resultado)

    //objeto de los datos

    const datosAuto = {
      marca : marca,
      plan : plan,
      year : year
    }

    this.setState({
      resultado : resultado,
      datos : datosAuto
    })

  }




  render() {
    return (
      <div className="App">
        <Header titulo = "Cotizador de seguro de autos"/>
        <div className="contenedor-formulario">
        <Formulario 
        cotizar={this.cotizarSeguro}
        />
        <Resumen
        
        datos = {this.state.datos}
        resultado = {this.state.resultado}
        />
        </div>
      </div>
    );
  }
}

export default App;
