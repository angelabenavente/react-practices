import React from 'react';
import RandomCat from './RandomCat';

/*Vamos a partir del ejemplo con un listado de gatos con fotos aleatorias. Usaremos las props para pasar el tamaño de la imagen a RandomCat. Pasaremos una anchura (width) y una altura (height), que serán enteros (píxeles). En el caso de que no se pasen props, width será de 400 y height será 200.
Desde CatList declararemos que se pinten tres componentes RandomCat:
Uno de 200x200 px
Otro de 200x400 px
Otro, al que no pasaremos props, que será de 400x200 px*/

class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li>
            <RandomCat />
          </li>
          <li>
            <RandomCat
            width="300px" heigh="100px"/>
          </li>
          <li>
            <RandomCat
            width="600px" heigh="200px"/>
          </li>
        </ul>
      </section>
    );
  }
}



export default CatList;