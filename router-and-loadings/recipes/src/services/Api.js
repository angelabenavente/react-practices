const RECIPELIST = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian';
const SINGLERECIPE = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

const fetchRecipes = () => fetch(RECIPELIST).then(response => response.json());
const fetchId = id => fetch(SINGLERECIPE+id).then(response => response.json());

export {fetchRecipes, fetchId};


