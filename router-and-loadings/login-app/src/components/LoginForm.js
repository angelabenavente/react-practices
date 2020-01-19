import React from 'react';
import Welcome from './Wellcome';


const LoginForm = props => {

  const onChangeHandler = event => {
    props.onChangeHandler(event.target.name, event.target.value);
  }

  const handlerSubmit = event => {
    event.preventDefault();
    props.handlerSubmit(event);
  }

  return <div className="login-wrapper">
    <form onSubmit={handlerSubmit}>
      <label>User</label>
    <input name="user" type="text" value={props.user} onChange={onChangeHandler}></input>
    <label>Password</label>
    <input onChange={onChangeHandler} name="password" type="text" value={props.password}></input>
    <input type="submit" value="Submit"></input>
    </form>
  </div>
}



export default LoginForm;