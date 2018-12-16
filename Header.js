import React, { Component } from 'react';
import  '../css/estilos.css'


class Header extends Component{

render(){

    return(

        <header className ="header">
            <h1 className="h1">{this.props.titulo}</h1>
        </header>

    )



}



}

export default Header