import React, { Component } from 'react';

class States1 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handlerOnkeyUp = this.handlerOnkeyUp.bind(this);
  }

  handlerOnkeyUp(event) {
    this.setState({value: event.target.value});
  }

  render(){
      return(
        <form>
          <input type="text" onKeyUp={this.handlerOnkeyUp}></input>
          <p>{this.state.value}</p>
        </form>       
      );
  }
}

export default States1;