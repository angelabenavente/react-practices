import React from 'react';
import Recipe from './Recipe';
import { Link, Route, Switch } from 'react-router-dom';


const RecipeList = props => {
  console.log(props);

// const fetchRecipes = event => {
//   props.fetchRecipes(event);
// }
  return (
    <div>
      <ul>
      {props.allRecipes
        .filter(recipe => props.inputValue === '' || recipe.strMeal.toLowerCase().includes(props.inputValue.toLowerCase()))
        .map((recipe,index) =>  <li className="recipe-wrapper" key={recipe.idMeal}>
        <Link to={`/recipe/${recipe.idMeal}`}
        className="recipe__btn">
        <Recipe
          recipeId={props.recipeId}
            mealImg={recipe.strMealThumb}
            mealName={recipe.strMeal}
            id={recipe.idMeal}
          />
        </Link>
      </li>
      )}
      </ul>
    </div>
  );
}


export default RecipeList;