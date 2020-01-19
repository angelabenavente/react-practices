import React from 'react';


class Tarjeta381 extends React.Component {


        render() {
          const { name, description, numberInput, idioma, pairs, age, image } = this.props;
          const genders = this.props.genders.join(', ');
          const numbers = [1, 4, 6, 8, 45, 89];
          const printNumbers = numbers
            .filter(number => number > numberInput)
            .filter(number => pairs==='true' ? number % 2 === 0 : number % 2 === 1)
            .map((number, index) =>{
              return <div key={index} className="type"><li className="membersList">
                  <span>{number}</span>
                </li></div>
              })

        // const users = [
        //   { name: 'Nymphadora Tonks', time: 9 },
        //   { name: 'Cedric Diggory', time: 28 },
        //   { name: 'Cho Chang', time: 35 },
        //   { name: 'Luna Lovegood', time: 45 },
        //   { name: 'Gregory Goyle', time: 56 }
        // ];

        // const {
        //   name: [, FullName]
        // } = users;
        // console.log(FullName);

        // const firstName = users[0].name;
        // const firstScore = users[0].time;
        // const secondName = users[1].name;
        // const secondScore = users[1].time;
        // const thirdName = users[2].name;
        // const thirdScore = users[2].time;
    return (
      <div className="card__id">
        {/* <p>El ganador es {firstName} con una puntuación de {firstScore}, el segundo es {secondName} con una puntuación de {secondScore}, el trcro es {thirdName} con una puntuación de {thirdScore}.</p> */}
        <h3 id="cardName">{name === '' ? "Nombre" : name}</h3>
        <p id="cardDescription">{description === '' ? "Descripción" : description}</p>
        <p id="cardIdioma">{idioma === '' ? "Idioma" : idioma}</p>
        <p id="cardAge">{age === '' ? "Edades" : age}</p>
        <p id="cardGender">{genders === '' ? "Género" : genders}</p>
        <img id="cardImage" src={image} alt="image"></img>
        <ul>
        {printNumbers}
        </ul>
      </div>
    );
  }
}

export default Tarjeta381;