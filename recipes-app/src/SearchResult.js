import React, { Component } from 'react';

class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            isLoading: true,
            results: []
        });
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch('/search-recipes-results')
            .then(res => res.json())
            .then(jsonObj => {
                console.log(jsonObj);
                this.setState({
                    isLoading: false,
                    results: jsonObj['results']                });
            })
    }

    render() {
        const LoadingDisplay = (
            <div className='loading'>
                <h2>Loadig...</h2>
            </div>
        );

        const RecipesList = (
                this.state.results && this.state.results.map((recipe => {
                    return(
                        <li key={recipe.title}>{recipe.title}, url - {recipe.href}</li>
                    )
                })
                )
        );

        const SearchResults = (
            this.state.isLoading === true ? <div> {LoadingDisplay} </div> : <div>{RecipesList}</div>
        );

        return(
            <div>
                {SearchResults}
            </div>
        )

    }
}

export default SearchResult;