import React from 'react';
import fruitis from '../data/fruitis';
import '../css/App.css';

const FruitItem = props => {
  return <ul>
      {fruitis.map((item,index) =>  
      <li key={index}>
        <h3>{item.name}</h3>
        <img src={item.url} alt={item.name}/>
      </li>
    )
  }
</ul>
}

FruitItem.defaultProps = {
  url: 'https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg'
}

export default FruitItem;
