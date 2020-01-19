import React from 'react';
import '../styles/App.css';
import clubs from '../data/clubs';
import ClubList from './ClubList';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      clubsData: clubs
    }
  }

  render() {
    console.log(this.state.clubsData);
    return (
      <div className="App">
        <ClubList items={this.state.clubsData}/>
      </div>
    );
  }
}

export default App;
