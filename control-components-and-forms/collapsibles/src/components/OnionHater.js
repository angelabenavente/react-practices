import React, { Component } from 'react';

class OnionHater extends Component{

  onChangeListener(event){

     if(event.target.value.includes('cebolla') ){
         alert('odio la cebolla');
     }
  }

  render(){
      return(
         <textarea onChange ={this.onChangeListener} name="" id="" cols="30" rows="5"></textarea>
      );
  }
}

export default OnionHater;