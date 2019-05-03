import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/es/FormControl";

class Header extends React.Component {
    render() {
        return(

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">RecipeCatalog</Navbar.Brand>
                <Form inline>
                    <FormControl onChange={this.props.onSearchChange} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info" onClick={this.props.searchPuppy} >Search</Button>
                </Form>
            </Navbar>
        )
    }
}

export default Header;
