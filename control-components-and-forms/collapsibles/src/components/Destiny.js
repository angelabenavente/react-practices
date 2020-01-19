import React, { Component } from 'react';

class Destiny extends Component{

    onChangeListener(event){

        alert(`Tu destino es viajar a: ${event.target.value}`);

    }

    render(){
        return(
  
           <select onChange ={this.onChangeListener} name="" id="">
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sidney">Sidney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
           </select>
        );
    }




}

export default Destiny;