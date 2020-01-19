import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = { 
           time: new Date()
        };
        setInterval(this.updateClock.bind(this), 1000);
    }

    updateClock() {
        this.setState({
            time: new Date()
        });
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