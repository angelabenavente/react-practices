import React, { Component } from 'react';
import fruitis from '../data/fruitis';
import '../css/App.css';
import FruitList from './FruitList';
import FruitItem from './FruitItem';

class App extends Component {
  render() {
    return (
    <div>
      <FruitList>
      {fruitis.map((item,index) =>  {
        return <li key={index}>
        <FruitItem 
          name={item.name}
          url={item.url}
        />
      </li>
      })
      }  
      </FruitList>
    </div>
    );
  }
}

//Datos por defecto:

App.defaultProps = {
  url: 'https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg'
}

export default App;
