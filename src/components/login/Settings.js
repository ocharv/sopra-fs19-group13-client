//@Author Fabian Küffer 15-931-421

import React from "react";
// import { BaseContainer } from "../../helpers/layout";
import { getDomain } from "../../helpers/getDomain";
// import Player from "../../views/Player";
// import { Spinner } from "../../views/design/Spinner";
import {Button2, Button3} from "../../views/design/Button";
import {BrowserRouter, withRouter,Redirect} from "react-router-dom";
import {Form, InputField, Label, Text, BoxContainer,RootContainer,EqualDiv} from "../../helpers/myLayout";
import {Users} from "../login/Users";

class Settings extends React.Component {

    constructor(props){
        super(props);
        this.state={
            user:null,
            userid:null,
            username:null,
            birthday:null,

            newusername:null,
            newbirthday:null,
        };

    }
     isValidDate(date) {
        //regex to check if a date is valid
         console.log("date" ,date);
         if (date === null) {
             return false;
         } else {
             //DD/MM-YYYY
             //either 0-2 and anything for 1 place OR 30/31 for the day
             var pattern = /([0-2]\d{1}|3[0-1])\/(0\d{1}|1[0-2])\/(19|20)(\d{2})/;
             var m = date.match(pattern);
             if (!m)
                 return false;
             var d = new Date(date);
             return true;
         }
    }




    componentDidMount() {
        //fetch a get request to get the newest state
        //store into states
        let path = `${getDomain()}/users/` + localStorage.getItem("userId");
        const status = response =>{
            if(response.status <= 299){
                return Promise.resolve(response);
            }
            return Promise.reject(new Error(response.statusText));
        }
        const json = response => response.json();
        fetch(path, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "token": localStorage.getItem("token")

            }
        })
            .then(status)
            .then(json)
            .then(data =>{
                console.log('Req succ', data);
                this.setState({user: data});
                console.log('Got user ', this.state.user);
                this.setState({userid: this.state.user.id});
                this.setState({username: this.state.user.username});
                this.setState({birthday:this.state.user.birthday});
            })
            .catch(err =>{
                console.log('Req failed!', err);
            })
    }

    updateUser(){
        //check if birthday is valid as a date, if not don't update it
        let bday = null;
        // console.log("birthday: ", this.bday);
        this.isValidDate(this.state.newbirthday) ?
             bday = this.state.newbirthday:
            bday = null;

        console.log("birthday: ", this.bday);


        console.log("settings:update", this.state);
        console.log("birthday: ", this.state.birthday);
        let path=`${getDomain()}/users/` + localStorage.getItem("userId");

        const status = response =>{
            if(response.status === 204){
                return Promise.resolve(response);
            }
            alert("Username already taken!");
            return Promise.reject(new Error(response.statusText));
        }
        const str = response => response.text();

        fetch(path, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "token": localStorage.getItem("token")

            },
            //send id, username and birthday to server, server does the checking
            body: JSON.stringify({
                id:this.state.userid,
                username: this.state.newusername,
                birthday:bday,
        })
        })

            .then(status)
            .then(str)
            .then(async data =>{
                console.log('Req succ', data);
                await new Promise(resolve => setTimeout(resolve, 100));
                this.props.history.push("/game/dashboard");
            })

            .catch(error => {
                console.log(error);
            })
    }

    cancel(){
        //if user pressed button cancel, go back to /game
        this.props.history.push("/game");

    }


    handleInputChange(key, value) {
//     // Example: if the key is username, this statement is the equivalent to the following one:
//     // this.setState({'username': value});
        this.setState({[key]: value});
    }


    render() {
        return (
            <RootContainer>
                <BoxContainer>
                    <Form>
                        <EqualDiv>
                            <Text>Edit Profile</Text>
                        </EqualDiv>

                        <Label>Username: {this.state.username}</Label>
                        <InputField
                            placeholder="Edit username.."
                            onChange={e => {
                                this.handleInputChange("newusername", e.target.value);
                            }}
                        />
                        <Label>Birthday: {this.state.birthday}</Label>

                        <InputField
                            placeholder="DD/MM/YYYY"
                            onChange={e => {
                                this.handleInputChange("newbirthday", e.target.value);
                            }}
                        />

                        <EqualDiv>
                            <div>
                                <Button3 onClick={()=>{
                                    this.cancel()
                                    }}
                                >
                                    Cancel
                                </Button3>
                            </div>
                            <div>
                                <Button3 onClick={()=>{this.updateUser()}}>
                                    Save
                                </Button3>
                            </div>
                        </EqualDiv>
                    </Form>
                </BoxContainer>
            </RootContainer>

        );
    }
}

export default withRouter(Settings);