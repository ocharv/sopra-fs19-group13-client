//@Author Fabian Küffer 15-931-421


import React from "react";
import { withRouter,Router,Route, BrowserRouter} from "react-router-dom";
import { Button,Button3,Button2 } from "../../views/design/Button";
import {Form, Text, FormContainer, RootContainer,BoxController, EqualDiv, SelectedController, Controller, BoxContainer,LoginController, Child} from "../../helpers/myLayout";
import  {UserProfile} from "../login/UserProfile";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : props.location.state.user,
        };
        console.log(this.props);
        console.log(props.userid);
    }

    goSettings() {
        let user = this.state.user;
        this.props.history.push({pathname: "/settings", state: {user}});
    }

    // const renderButton = ({user}) =>{
    // }


    render(){
        console.log(this.state.birthday);
        console.log("creationdate", this.state.creationDate);
        return (
            <RootContainer>
                <BoxContainer>
                    <Form>
                        <UserProfile user={this.state.user}/>
                        <EqualDiv />
                        <div>{(this.state.user.token === localStorage.getItem("token") ?
                            <Button2
                                width="100%"
                                onClick={() => {
                                    this.goSettings()
                                }}>
                                Edit Profile
                            </Button2> :
                            <div></div>)}
                        </div>
                        <div>
                            <Button2
                                width="100%"
                                onClick={() => {
                                    this.props.history.go(-1)
                                }}>
                                Back
                            </Button2>
                        </div>
                    </Form>
                </BoxContainer>
            </RootContainer>

        );
    }
}

export default withRouter(Users);