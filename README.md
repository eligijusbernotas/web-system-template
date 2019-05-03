# RecipeCatalog


## Description
RecipeCatalog is a web system that let's it's users search the RecipePuppy database for recipes by name and save them.

## Entity definition
Entity:
- User (_id(string, defined by mongodb), username(string), password(string), recipes(array, {title(string), href(string), ingredients(string)});


## API definition
RecipePuppy API methods:
- GET /api/q={query} - returns recipes by the search query;

RecipeCatalog methods:
- POST /api/user-register - adds user to the database and returns the user, request body should have a username and password;
- POST /api/user-login - returns user if found in database, body should have username and password;
- GET /api/recipes/{query} - returns fetched recipes from the RecipePuppy API;
- POST /api/recipes/add - adds a recipe to the user's recipes adn returns the updated user, body should have user's _id, recipe's title, href and ingredients strings;
- POST /api/recipes/update - updated the user and returns the updated user, body should have a user object; 



## UI definition
https://wireframe.cc/BXO5bD
