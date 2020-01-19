import React from 'react';

const Search = props => {

  const onChangeHandler = event => {
    //event.preventDefault();
    props.onChangeHandler(event.target.value);
  }
  
  return <form value={props.inputValue} className="search-wrapper">
    <input onChange={onChangeHandler} type='text' value={props.inputValue}></input>
    </form>
}

export default Search;