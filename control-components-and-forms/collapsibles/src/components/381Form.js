import React from 'react';
import data from './data.json';
import Accordion from './Acordion';
import AccordionItem from './AccordionItem';



class Form381 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: 0,
      limit: 3,
      checkState: [false, false, false],
      open: '',
      data: data
    };
    this.handleOpenAccordion = this.handleOpenAccordion.bind(this);
  }

  handleOpenAccordion = (name) => {
    if (this.state.accordionOpen === name) {
      this.setState({
        open: ''
      });
    } else {
      this.setState({
        open: name
      });
    }
  }

  onChangeHandler = event => {
    this.props.onChangeHandler(event);
  }


  render() {
    const users = [
      { name: 'Nymphadora Tonks', time: 9 },
      { name: 'Cedric Diggory', time: 28 },
      { name: 'Cho Chang', time: 35 },
      { name: 'Luna Lovegood', time: 45 },
      { name: 'Gregory Goyle', time: 56 }
    ];
    const [a,b,c, , ] = users;
    const open = this.state.open;
    
    console.log(a.name + '' + a.time + '' + b.name + '' + b.time + '' + c.name + '' + c.time)

    const paletteNames = data.palettes
      .map(palette =>{
        return <AccordionItem key={palette.name} name={palette.name} title={palette.name} handleOpenAccordion={this.handleOpenAccordion} openName={open}>
        <p>{palette.from}</p>
      </AccordionItem>
        })
    
    return (
      <React.Fragment>
      <Accordion>
    {paletteNames}
            </Accordion>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={this.onChangeHandler}
          />
        <label htmlFor="description">Descripción:</label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={this.onChangeHandler}
          />
          <label htmlFor="numberInput">Número:</label>
           <input
            id="number"
            name="numberInput"
            type="number"
            onChange={this.onChangeHandler}
          />

            <form className="form">
            <input type="checkbox" name="pairs" id="pairs" value="true" onChange={this.onChangeHandler} /> Pairs

            <input type="checkbox" name="pairs" id="noPairs" value="false" onChange={this.onChangeHandler}/> No pairs
            </form>

          <label htmlFor="idioma">Idioma:</label>
          <select
            id="idioma"
            name="idioma"
            type="text"
            onChange={this.onChangeHandler}>
              <option>Francés</option>
              <option>Inglés</option>
            </select>
        </form>
        <form action="">
          <input type="radio" id="age" name="age" value="Para todos los públicos" onChange={this.onChangeHandler} defaultChecked={true}/>
          <label htmlFor="age">Para todos los públicos</label>

          <input type="radio" id="age1" name="age" value="A partir de 7" onChange={this.onChangeHandler} />
          <label htmlFor="age1">A partir de 7</label>

          <input type="radio" id="age2" name="age" value="A partir de 12" onChange={this.onChangeHandler} />
          <label htmlFor="age2">A partir de 12</label>

          <input type="radio" id="age3" name="age" value="A partir de 18" onChange={this.onChangeHandler} />
          <label htmlFor="age3">A partir de 18</label>

        </form>
        <form className="form">
          <input type="checkbox" name="genders" id="comedia" value="Comedia" onChange={this.onChangeHandler} /> Comedia

          <input type="checkbox" name="genders" id="drama" value="Drama" onChange={this.onChangeHandler}/> Drama

          <input type="checkbox" name="genders" id="fantasia" value="Fantasía" onChange={this.onChangeHandler}/> Fantasía

          <input type="checkbox" name="genders" id="terror" value="Terror" onChange={this.onChangeHandler}/> Terror
          
          <input type="checkbox" name="genders" id="accion" value="Acción" onChange={this.onChangeHandler}/> Acción
          <input type="checkbox" name="genders" id="familia" value="Familia" onChange={this.onChangeHandler}/> Familia
        </form>
      </React.Fragment>
    );
  }
}

export default Form381;