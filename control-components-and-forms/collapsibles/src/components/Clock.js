import React, { Component, Fragment } from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = { 
           time: new Date()
        };
        setInterval(this.updateClock.bind(this), 1000);
    }

    componentDidMount() {
        // guardamos el identificador del interval para limpiarlo más tarde
        this.intervalId = setInterval(this.updateClock);
        // NOTA: usamos atributos de la clase y no del estado para guardar datos que no interfieren en cómo se renderiza un componente
      }

    updateClock() {
        this.setState({
            time: new Date()
        });
    }

    componentWillUnmount() {
        // limpiamos el interval
        clearInterval(this.intervalId);
      }

    render() {
        const hours = this.state.time.getHours();
        const minutes = this.state.time.getMinutes();
        const seconds = this.state.time.getSeconds();
        
    
        return (
            <span>{`${hours} : ${minutes} : ${seconds}`}</span>
        )
    }
}
   
export default Clock;