import React from 'react';
import Wellcome from './Wellcome';
import LoginForm from './LoginForm';
import Loader from './Loader';
import {fetchUsers} from '../services/Api'
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.state = {
    //  user: '',
    //  password: '',
     user: 'adalab',
     password: 'perrete',
     isLogged: false,
     userName: 'adalab',
     userPassWord: 'perrete',
     allUsers: [],
     isLoading: false
    }
  }

  fetchUsers() {
    fetchUsers()
      .then(data => {
        this.setState({
          allUsers: data.results,
          isLoading: false
        });
      });
    console.log(this.state.allUsers);
  }

  onChangeHandler (name,value) { 
    this.setState({[name]: value})
  }
  
  handlerSubmit () {
    console.log('hola');
    // this.setState({[name]: value})
    let { user, password, userName, userPassWord} = this.state;
    if(user === userName && password === userPassWord) {
      this.setState({isLogged: true, isLoading:true});
      this.fetchUsers();
    } else {
      alert('Login incorrecto')
    }
  }


  render(){
    console.log(this.state)
    return (
      <div className="App">
        {!this.state.isLogged ? (
        <LoginForm user={this.state.user} password={this.state.password} onChangeHandler={this.onChangeHandler} handlerSubmit={this.handlerSubmit}/>
        ) : !this.state.isLoading ? (<Wellcome fetchUsers={this.fetchUsers} allUsers={this.state.allUsers}/> ) : <Loader/>
        //Al ocupar varias líneas el ternario, se ponen paréntesis en el LoginForm
        }
      </div>
    );
  }
}

export default App;
