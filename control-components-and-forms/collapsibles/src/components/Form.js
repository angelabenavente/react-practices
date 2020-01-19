import React from 'react';

const Form = props => {

  const getInputValue = (event) => {
    props./*renderText*/propsDeForm(event.target.value)
  }
  return <form>
    <label htmlFor='search'>Buscar</label>
    <input type='text'id="search" onKeyUp={getInputValue}/>
  </form>
}

/*class Form extends React.Component {
  constructor(props) {
    super(props)
    this.consoleValue = this.consoleValue.bind(this); //wtf "el this del consoleValue enlázamelo a mi clase". En Arrow functions no hace falta, pero es habitual que los componentes sean clases.
  }

  consoleValue(event) {
    console.log(event.target.value);
    console.log(this);
  }

  render() {
    return <form>
      <label htmlFor='search'>Buscar</label>
      <input type='text'id="search" onKeyUp={this.consoleValue}/>
    </form>
  }
}*/

/*class Form extends React.Component {
//Hay que meter las funciones dentro de la clase, se pueden poner fuera pero no es buena práctica. Además, es un método de esta clase.
  consoleValue(event) {
    console.log(event.target.value);
  }

  render() {
    return <form>
      <label htmlFor='search'>Buscar</label>
      <input type='text'id="search" onKeyUp={this.consoleValue}/>
    </form>
  }
}*/


/* componente funcional

const Form = () => {

  const consoleValue = (event) => console.log(event.target.value)
  return <form>
    <label htmlFor='search'>Buscar</label>
    <input type='text'id="search" onKeyUp={consoleValue}/>
  </form>
}*/

export default Form;