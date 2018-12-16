import React, { Component } from 'react';
import  '../css/estilos.css'


class Formulario extends Component{

//los metodos van antes del render

//los refs se crean para leer los datos del formulario

// si al metodo lo paso como una arrow function me evito poner en el evento submit : onSubmit={this.cotizar.bind(this)}

marcaRef = React.createRef();
yearRef = React.createRef();
planBasico = React.createRef();
planCompleto = React.createRef();
    
    cotizar = (e) => {
        e.preventDefault();

      /*  const plan = "";

        if(this.planBasico.current.checked){

          plan = "Basico"  

        }else if(this.planCompleto.current.checked){

            plan = "Completo"
        }*/

       //operador ternario
       
       const plan = this.planBasico.current.checked ? "Basico" : "Completo"
        
        //obtener los datos
        //console.log(this.yearRef.current.value)
        //console.log(this.marcaRef.current.value) 

        //crear un objeto

        const info = {
            marca : this.marcaRef.current.value,
            year : this.yearRef.current.value,
            plan : plan
        }
        //console.log(info)

        //enviarlo al componente principal

        this.props.cotizar(info);

        //resetear el formulario

       // e.currentTarget.reset();
    }


render(){


    return(

        <form className="cotizar-auto" onSubmit={this.cotizar}>
        <div className="campo">
            <label>Marca</label>
            <select name="marca" ref = {this.marcaRef} >
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
            </select>
        </div>

        <div className="campo">
            <label>Año</label>
            <select name="year" ref={this.yearRef}>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
            </select>
        </div>
        <div className="campo">
            <label>Plan:</label>
            <input type="radio"  ref = {this.planBasico} name="plan" value="basico"/> Básico
            <input type="radio"  ref = {this.planCompleto} name="plan" value="completo"/> Completo
        </div>

        <button type="submit" className="boton">Cotizar</button>
    </form>

    )



}



}

export default Formulario