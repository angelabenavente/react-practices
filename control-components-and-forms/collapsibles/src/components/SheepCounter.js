import React, { Component, Fragment } from 'react';

class SheepCounter extends React.Component {

    constructor(props) {
        super(props)
        this.arrayOfSheets = []
        this.state = {
            contador: 0,
        }

        this.handleClik = this.handleClik.bind(this)
    }


    handleClik() {
        this.arrayOfSheets.push(<img alt="" src="https://ih0.redbubble.net/image.24067591.6246/ap,550x550,12x12,1,transparent,t.png"></img>)
        this.setState({ contador: this.state.contador + 1, });
        this.setState(this.arrayOfSheets.map(sheet => sheet))
        console.log(this.arrayOfSheets)
    }




    render() {
        return (
            <div className="wrapper">
                <span className="contador">{this.state.contador}</span>
                <button className="btn" onClick={this.handleClik}>Añadir Oveja</button>
                <div>{this.arrayOfSheets}</div>
            </div>
        )
    }
}
export default SheepCounter;