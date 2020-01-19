import React from 'react';

const User = props => {
  return <div className="user-wrapper">
    <img src={props.imgUrl} alt={props.userNickName}/>
    <div className="info-wrapper">
      <h4>{props.userNickName}</h4>
      <p>Ciudad: {props.location}.</p>
    </div>
  </div>
}

export default User;