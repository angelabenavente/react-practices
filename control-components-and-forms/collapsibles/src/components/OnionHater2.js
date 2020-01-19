import React, { Component } from 'react';


class OnionHater2 extends Component {
   
    hateOnion(event) {
        if (event.target.value.includes('cebolla')) {
            event.target.classList.add('HateColor');
        }
    }
    render() {
      return (
        <div className={this.wrapperClass}>
            <textarea className="Text-area" name="" id="" cols="30" rows="10" onChange={ hateOnion }></textarea>
        </div>
      );
    }
  }
  
  export default OnionHater2;