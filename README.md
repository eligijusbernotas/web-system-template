# RecipeCatalog


## Description
RecipeCatalog is a web system that let's it's users search the RecipePuppy database for recipes by name and save them.

## Entity definition
Entity:
- User (_id(string, generated by mongodb), username(string, restriction: 3-20 symbols), password(string, restriction: 3-20 symbols), recipes(array, {title(string, fetched from RecipePuppy), href(string, fetched from RecipePuppy), ingredients(string, fetched from RecipePuppy});

User schema = ({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    recipes: [recipesSchema]
    })
    
Recipes schema = ({
    title: String,
    href: String,
    ingredients: String
})

## API definition
RecipePuppy API methods:
- GET /api/q={query} - returns recipes by the search query;

RecipeCatalog methods:
- POST /api/user-register - adds user to the database and returns the user, request body = {username: '', password: ''};
- POST /api/user-login - returns user if found in database, request body = {username: '', password: ''};
- GET /api/recipes/{query} - returns fetched recipes from the RecipePuppy API;
- POST /api/recipes/add - adds a recipe to the user's recipes adn returns the updated user, body = {_id: '', title: '', href: '', ingredients: ''};
- POST /api/recipes/update - updated the user and returns the updated user, 
body = {user:{
  username: '',
  password: '',
  recipes:[]
}}; 
## HTTP response headers:
- 200 OK - request was sucessful;
- 400 Bad request - ivalid request, wrong body or paramater;



## UI definition
https://wireframe.cc/BXO5bD
