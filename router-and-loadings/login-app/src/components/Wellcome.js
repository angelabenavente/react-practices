import React from 'react';
import User from './User';



const Wellcome = props => {

const fetchUsers = event => {
  props.fetchUsers(event);
}
  return (
    <div>
       <h1>Bienvenido</h1>
      <ul>
      {props.allUsers.map((user,index) =>  {
        return <li key={index}>
        <User
          imgUrl={user.picture.medium}
          userNickName={user.name.first}
          location = {user.location.city}
        />
        </li>
      })}
      </ul>
      <button onClick={fetchUsers}>Reload</button>
    </div>
  );
}


export default Wellcome;