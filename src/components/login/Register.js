import React from "react";
// import styled from "styled-components";
// import { BaseContainer  } from "../../helpers/layout";
import { getDomain } from "../../helpers/getDomain";
// import User from "../shared/models/User";
import { withRouter } from "react-router-dom";
import { Button } from "../../views/design/Button";
// import Header from "../../views/Header";
import {Form, Label, ButtonContainer, InputField,FormContainer, RootContainer,BoxController, Text, EqualDiv, SelectedController, Controller, LoginController, Child} from "../../helpers/myLayout";


document.body.style = 'background:white';

export class Register extends React.Component {
//does a POST request, rejects it if not http status is 201 from the server
    //

    constructor(props) {
        super(props);
        this.state = {
            password: null,
            username: null,
        };
    }

    register() {
        fetch(`${getDomain()}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(response =>{
                if(response.status === 201) {
                    alert("Registration successfull!\n" +
                        "Please login to continue.");
                    var returnedUser = response.json();
                    console.log("Registration successfull!");
                    //reload to go back to login
                    //props.history.push stayed at registering
                    //maybe change later, but reload works
                    window.location.reload();

                }
                else{
                    alert("registration failed\n" + "username is already taken");
                }
            })
            .catch(err => {
                if (err.message.match(/Failed to fetch/)) {
                    alert("The server cannot be reached. Did you start it?");
                } else {
                    alert(`Something went wrong during the registration: ${err.message}`);
                }
            });
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value });
    }

    // componentDidMount() {}

    render() {
        return (
            <Form>
                <EqualDiv>
                <Text>REGISTER</Text>
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
                            this.register();
                        }}
                    >
                        Register
                    </Button>
                </ButtonContainer>
            </Form>

        );
    }
}

export default withRouter(Register);