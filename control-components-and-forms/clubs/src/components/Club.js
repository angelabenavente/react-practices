import React from 'react';

const Club = (props) => {
  return <div className="container">
    <img className="image"src={props.srcImage} alt=""></img>
    <h1 className="title">{props.clubTitle}</h1>
    <p className="members">Miembros:</p>
    {props.members.map((member, index)=>{
      return <li key={index} className="membersList">
          <span>{member}</span>
        </li>
      })
    }
  </div>
}


export default Club;