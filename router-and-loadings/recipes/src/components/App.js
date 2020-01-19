import React from 'react';
import '../styles/App.css';
import { fetchRecipes } from '../services/Api';
import { fetchId } from '../services/Api';
import RecipeList from './RecipeList';
import Search from './Search';
import RecipeInfo from './RecipeInfo';
import { Link, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: [],
      value: '',
      singleRecipe: {}
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.recipeId = this.recipeId.bind(this);
    this.renderRecipeInfo = this.renderRecipeInfo.bind(this);
    this.fetchId = this.fetchId.bind(this);
  }

  componentDidMount(){
      fetchRecipes() 
        .then(data => {
          this.setState({
            allRecipes: data.meals,
            value: ''
          });
          console.log(this.state.allRecipes);
        });
    }

    onChangeHandler(inputValue){
      this.setState({
        value: inputValue
      });
      console.log(this.state.value);
    }

    recipeId(id){
      console.log(id);
    }

    //cargo receta seleccionada
    fetchId(id){
      if(id !== this.state.singleRecipe.idMeal) {
        fetchId(id)
        .then(data => 
          this.setState({
            singleRecipe: data.meals[0]
          })
        )
      }
    }

    renderRecipeInfo(props){
      console.log(props)
      this.fetchId(props.match.params.id)
      return <RecipeInfo recipe={this.state.singleRecipe} />;
    }


  render() {
    console.log(this.state.value)
    return (
      <div className="App">
        {/* <Search onChangeHandler={this.onChangeHandler} inputValue={this.state.value}/>
        <RecipeList allRecipes = {this.state.allRecipes} inputValue={this.state.value}/> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
       <Switch>
          <Route path="/" exact>
          <Search onChangeHandler={this.onChangeHandler} inputValue={this.state.value}/>
          <RecipeList allRecipes = {this.state.allRecipes} inputValue={this.state.value} recipeId={this.recipeId}/>
          </Route>
          <Route path="/recipe/:id" render={this.renderRecipeInfo}>
            {/* <RecipeInfo/> */}
          </Route>
          {/* <Route path="/RecipeInfo" component={RecipeInfo} /> */}
      </Switch>
     </div>
    );}
  }

export default App;
