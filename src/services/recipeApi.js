//https://api.sampleapis.com/recipes/recipes

//Function fetch to return the data that the Api shows.
const ApiData = () => {
  //The parameter fetch is the url api
  return (
    fetch('https://api.sampleapis.com/recipes/recipes')
      .then((response) => response.json())
      //I bring the cleaned data from Api by using a map array
      .then((data) => {
        const dataClean = data.recipes.map((recipe) => {
          return {
            title: recipe.title,
            cuisine: recipe.cuisine,
            tags: recipe.tags,
            photoUrl: recipe.photoUrl,
            calories: recipe.calories,
          };
        });
        return dataClean;
      })
  );
};

export default ApiData;
