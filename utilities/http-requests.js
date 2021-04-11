// Returns the json response for getting random recipes. 
async function getRandomRecipes(tags, count) {

    let url = 'https://quickneasy-backend.herokuapp.com/random?count='
        + count
    if (tags) {
        tags = tags.replace(" ", "+")
        url += '&tags=' + tags
    }
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    return data
}

async function GetRecipesByIngredients(ingredients) {
    ingredients = ingredients.replace(" ", "+")
    let url = 'https://quickneasy-backend.herokuapp.com/getrecipesbyingredients?ingredients=' + ingredients

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    return data
}

async function GetRecipeDetails(recipeId) {
    let url = 'https://quickneasy-backend.herokuapp.com/getrecipedetails?id=' + recipeId

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    return data
}