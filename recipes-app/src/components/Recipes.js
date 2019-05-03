import React from 'react';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';
import Jumbotron from "react-bootstrap/Jumbotron";

class Recipes extends React.Component {
    render() {
        return(
            <Jumbotron>
                <h1>{this.props.username}'s saved recipes</h1>
                <p>
                    {this.props.recipes.map(recipe => (
                        <RecipeItem key={recipe._id} recipe={recipe} removeRecipe={this.props.removeRecipe}/>
                    ))}
                </p>
            </Jumbotron>
        )
    }
}

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    removeRecipe: PropTypes.func.isRequired
};
export default Recipes;
