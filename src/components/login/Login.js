//@Author Fabian Küffer 15-931-421

import React from "react";
import styled from "styled-components";
// import { BaseContainer } from "../../helpers/layout";
import { getDomain } from "../../helpers/getDomain";
// import User from "../shared/models/User";
import { withRouter,Router,Route, BrowserRouter} from "react-router-dom";
import { Button } from "../../views/design/Button";
// import Header from "../../views/Header";
import {Form, Text, InputField, FormContainer, RootContainer,BoxController, EqualDiv, SelectedController, ButtonContainer,  BoxContainer,LoginController, Child,Label} from "../../helpers/myLayout";
// import Register from "./Register.js";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            history:this.props.history,
            user:null,
        };
    }

     login = () => {

        const status = response =>{
            if(response.status === 200){
                //
                return Promise.resolve(response);
            }
            alert("Login failed, please enter correct username and password.");

            return Promise.reject(new Error(response.statusText));
        }
         const str = response => response.json();

         fetch(`${getDomain()}/login`, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
                 "Accept": "application/json"
             },
             body: JSON.stringify({
                 username: this.state.username,
                 password: this.state.password
             })
         })

             .then(status)
             .then(str)
             .then(data =>{
                 // console.log('Req succ', data);
                 console.log('Req succ', data);
                 this.setState({user: data});
                 console.log('Got user ', this.state.user);
                 localStorage.setItem("token", data.token);
                 localStorage.setItem("userId", data.id);
                 console.log(localStorage);
                 let user = this.state.user;
                 this.props.history.push({pathname:`/game`})
         })

             .catch(error => {
                 console.log(error);
             })


    }

//   /**
//    *  Every time the user enters something in the input field, the state gets updated.
//    * @param key (the key of the state for identifying the field that needs to be updated)
//    * @param value (the value that gets assigned to the identified state key)
//    */
    handleInputChange(key, value) {
//     // Example: if the key is username, this statement is the equivalent to the following one:
//     // this.setState({'username': value});
        this.setState({[key]: value});
    }


//
//   /**
//    * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
//    * Initialization that requires DOM nodes should go here.
//    * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
//    * You may call setState() immediately in componentDidMount().
//    * It will trigger an extra rendering, but it will happen before the browser updates the screen.
//    */
    componentDidMount() {
    }

    render() {
        return (
            <Form>
                <EqualDiv>
                    <Text>LOGIN</Text>
                </EqualDiv>
                <Label>Username</Label>
                <InputField
                    placeholder="Enter username.."
                    onChange={e => {
                        this.handleInputChange("username", e.target.value);
                    }}
                />
                <Label>Password</Label>
                <InputField
                    placeholder="Enter password.."
                    onChange={e => {
                        this.handleInputChange("password", e.target.value);
                    }}
                />
                <ButtonContainer>
                    <Button
                        disabled={!this.state.username || !this.state.password}
                        width="50%"
                        onClick={() => {
                            this.login();
                        }}
                    >
                        Login
                    </Button>
                </ButtonContainer>
            </Form>
        );
    }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */

export default withRouter(Login);


