import React from 'react';

const Recipe = props => {
  return <div className="recipe-wrapper" id={props.id} >
    <img src={props.mealImg} alt={props.mealName}/>
    <h3>{props.mealName}</h3>
  </div>
}

export default Recipe;