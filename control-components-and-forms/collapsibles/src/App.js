import React from 'react';
import './App.css';
import OnionHater from './components/OnionHater';
import Destiny from './components/Destiny';
import OnionHater2 from './components/OnionHater';
//import './components/OnionHater2.css';
import Header from './components/Header';
import Form from './components/Form';
import './components/OnionHater2.css';
import CityImage from './components/CityImage';
//import States1 from './components/States1';
import States2 from './components/States2';
import Clock from './components/Clock';
import SheepCounter from './components/SheepCounter';
import State6 from './components/State6';



class App extends React.Component {
  render() {
    
    return (
      //<OnionHater />
      //<Destiny />
      //<OnionHater2 />
      //<CityImage city="Praga" />

      //<States1 />
      //<States2 />
      //<Clock />
      //<SheepCounter />
      <State6 />
      
    );
  }

}

/*class App extends React.Component {*/

 //consoleValue /*renderText*/ (patata /*data */){
    //console.log(patata /*data */);
 //}

  //render() {
    
    //return (
      //<div className="appcl">
        //<Header propsDeHeader /*renderText*/={this.consoleValue/*renderText*/}/>
      //</div>
    //);
  //}

//}



export default App;
