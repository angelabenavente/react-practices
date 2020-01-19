import React, { Component, Fragment } from 'react';

class State6 extends React.Component {

  constructor(props) {
      super(props)
      this.arrayOfSheets = []
      this.state = {
          firstName: 'Ada',
          lastName: 'Lovelace',
          birdthDate: {
          day: 10,
          month: 'diciembre',
          year: 1815
        }
      }

      //this.handleClik = this.handleClik.bind(this)
  }

  handlerChange(event) {

    this.setState(prevState => {
      prevState.birdthDate.day = 33;
      return { userData: prevState.userData };
    })
  }


  render() {
      return (
        <form>
          <input name="name" onChange={this.handlerChange}></input>
          <input name="lastName"></input>
          <input name="day"></input>
          <input name="month"></input>
          <input name="year"></input>
        </form>

      )
  }
}

export default State6;