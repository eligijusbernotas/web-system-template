import React from "react";
import axios from "axios";
import { Button, FormGroup, FormControl, FormLabel, Collapse, Alert} from "react-bootstrap";
import "./Login.css";
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            regOpen: false,
            loginError: ''
        };
    };



    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        axios.post('/user-login', {
                username: this.state.username,
                password: this.state.password
        }).then(data => {
            if(data.data.length === 0){
                console.log('Nope');
               this.setState({
                   loginError : <Alert variant='danger'>Wrong username or password.</Alert>
               });
            } else {
                this.setState({
                    loginError : ''
                });
                console.log(data.data);
                this.props.loginUser(data.data);
                this.props.history.push('/');
            }
        })
    };

    handleRegSubmit = event => {
        event.preventDefault();
        axios.post('/user-register', {
            username: this.state.username,
            password: this.state.password
        }).then(data => {
            if(data.data === null){
                console.log('Nope');
                this.setState({
                    loginError : <Alert variant='danger'>User with username already exists.</Alert>
                });
            } else {
                this.setState({
                    loginError : ''
                });
                console.log(data.data);
                this.props.loginUser(data.data);
                this.props.history.push('/');
            }
        })
    };

    render() {
        const {regOpen} = this.state;
        return (
            <div className="Login">
                {this.state.loginError}
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            autoFocus
                            type="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block

                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
                        <Button
                            onClick={() => this.setState({ regOpen: !regOpen })}
                            aria-controls="register"
                            aria-expanded={regOpen}
                        >
                            Register
                        </Button>
                        <Collapse in={this.state.regOpen}>
                            <div id="register" className='Login'>
                                <form onSubmit={this.handleRegSubmit}>
                                    <FormGroup controlId="username" bsSize="large">
                                        <FormLabel>Username</FormLabel>
                                        <FormControl
                                            autoFocus
                                            type="username"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="password" bsSize="large">
                                        <FormLabel>Password</FormLabel>
                                        <FormControl
                                            placholder='password'
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            type="password"
                                        />
                                    </FormGroup>
                                    <Button
                                        block
                                        disabled={!this.validateForm()}
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </form>
                            </div>
                </Collapse>
            </div>
        );
    }
}
export default withRouter(Login);