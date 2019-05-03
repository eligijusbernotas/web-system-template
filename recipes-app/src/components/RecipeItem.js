import React from 'react';
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class RecipeItem extends React.Component {
    render() {
        const { _id, title, href, ingredients} = this.props.recipe;
        return (
                <Card style={{ width: '14rem', display: 'inline-block' }}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {ingredients}
                        </Card.Text>
                        <Button variant="primary" href={href}>To Recipe</Button>

                        <Button variant="danger" size="sm" onClick={this.props.removeRecipe.bind(this, _id)}>X</Button>
                    </Card.Body>
                </Card>
        )
    }
}

RecipeItem.propTypes = {
    recipe: PropTypes.object.isRequired
};
export default RecipeItem;
