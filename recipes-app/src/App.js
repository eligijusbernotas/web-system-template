import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";
import Recipes from './components/Recipes';
import Header from './components/layout/Header';
import Login from './components/Login';
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class App extends React.Component {
    state = {
        user: JSON.parse(localStorage.getItem('user')) || [],
        results: [],
        searchQuery: ''
    };

    getUser = user => {
        console.log(user);
      this.setState({user : user},() =>{
            localStorage.setItem('user', JSON.stringify(this.state.user))
        });

        console.log(JSON.parse(localStorage.getItem('user')));
        console.log(this.state.user)
    };

    removeRecipe = (_id) => {
        console.log(_id);
        this.setState(state => {
                let user = state.user;
                user.recipes = [...state.user.recipes.filter(recipe => recipe._id !== _id
                )];
                return user;
        },() => {
            localStorage.setItem('user', JSON.stringify(this.state.user))
        });
        axios.post('/recipes/update', {
            user: this.state.user
        });
    };

    onSearchChange = (e) => {
        this.setState({searchQuery: e.target.value});
    };

    searchPuppy = () => {
        axios.get("/recipes/" + this.state.searchQuery, {
        } ).then(data => {
            console.log(data.data.data);
            this.setState({results: data.data.data})
        })
    };

    addRecipe = (e) => {
      let targetValue = e.target.value;
      let resultRecipe;
      this.state.results.map(result =>{
          if(result.title === targetValue) {
              resultRecipe = result;
          } else {
              return null;
          }

      });
      console.log(resultRecipe);
      axios.post('/recipes/add', {
          _id: this.state.user._id,
          title: resultRecipe.title,
          href: resultRecipe.href,
          ingredients: resultRecipe.ingredients
      }).then(user => {
          console.log(user.data);
          this.setState({user: user.data}, () => {
                  localStorage.setItem('user', JSON.stringify(this.state.user))
          })
      });
    };

    render() {

            return (
                <Router>
                    <div className='App'>
                        <Header searchPuppy={this.searchPuppy} onSearchChange={this.onSearchChange}/>
                        <Route exact path='/' render={props => (
                            <React.Fragment>
                                <Jumbotron>
                                    <h1>{this.state.searchQuery} results</h1>
                                        {this.state.results.map(recipe =>(
                                            <Card style={{ width: '18rem', display: 'inline-block'}}>
                                                <Card.Body>
                                                    <Card.Title>{recipe.title}</Card.Title>
                                                    <Card.Text>
                                                        {recipe.ingredients}
                                                    </Card.Text>
                                                        <Button variant="primary" href={recipe.href}>To Recipe</Button>
                                                        <Button variant="primary" value={recipe.title} onClick={this.addRecipe}>Save</Button>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                </Jumbotron>
                                <Recipes recipes={this.state.user.recipes} username={this.state.user.username} removeRecipe={this.removeRecipe}/>
                            </React.Fragment>
                        )}/>
                        <Route path='/login' render={() => <Login loginUser={this.getUser}/>}/>
                    </div>
                </Router>
            )
        }
}
export default App;
