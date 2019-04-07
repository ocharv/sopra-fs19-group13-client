import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../helpers/layout";
import { getDomain } from "../../helpers/getDomain";
import Player from "../../views/Player";
import { Spinner } from "../../views/design/Spinner";
import {Button2, Button3} from "../../views/design/Button";
import {BrowserRouter, withRouter,Redirect} from "react-router-dom";
import {BoxContainer,RootContainer} from "../../helpers/myLayout";
import {Form,FormContainer} from "../../helpers/myLayout";
import {Users} from "../login/Users";
import {Logout} from "../../helpers/Logout";

document.body.style = 'background:blue';

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

const UsersStyle = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PlayerContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Id = styled.div`
  //margin-left: auto;
  margin-right: 10px;
  font-weight: bold;
  float:right;
  //padding: 10px;
`;
const Name = styled.div`
  font-weight: bold;
  color: #06c4ff;
  float:left;
  
`;
const Container3 = styled.div`
  margin: 6px 0;
  width: 280px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff26;
  float:left;
 
`;
class Game extends React.Component {
  constructor(props) {

    super(props);
    console.log("props",props);
    this.state = {
      users: null,
      user: null,
      loading:true,

  };

    console.log("userid",this.state.user);
    console.log("state:", this.state);
    console.log("props", this.props);
  }


routeChange(user)  {
      //changes route to /users/userid
    let path = '/users/'+user.id;
    this.props.history.push({pathname:path,state:{user}});
  }

  // goSettings(){
  //     //changes route to settings
  //   this.props.history.push({pathname:"/settings"});
  // }

    componentWillMount() {
        const status = response =>{
            if(response.status === 200){
                return Promise.resolve(response);
            }
            // alert("Username already taken!")
            // alert("not ok");
            console.log("token not ok!");
            localStorage.clear();
            this.props.history.push("/login");
        }
        const str = response => response.json();

        fetch(`${getDomain()}/token`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "token": localStorage.getItem("token")

            },
            //send id, username and birthday to server, server does the checking
            // body: JSON.stringify({
            //     // token: localStorage.getItem("token")
            // })
        })

            .then(status)
            .then(str)
            .then(async data =>{
                // console.log('Req succ', data);
                // await new Promise(resolve => setTimeout(resolve, 100));
                // this.props.history.push("/game/dashboard");
            })

            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount () {

      //fetch all users from the server
    fetch(`${getDomain()}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
          "token": localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(async users => {
        // delays continuous execution of an async operation for 0.8 seconds.
        // This is just a fake async call, so that the spinner can be displayed
        // feel free to remove it :)
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("loading: ", this.state.loading);

        this.setState({ users });
        this.setState({loading: false});
        //added state loading to make sure that only after fetching the rendering will be done with the
          //componenets and the spinner will be shown meanwhile
        console.log("loading: ", this.state.loading);
        console.log("users: ", users);
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong fetching the users: " + err);
      });
  }

  render() {
      //doesnt do anything
    const{loading} = this.props;

    return (
        <RootContainer>
          <BoxContainer>
            <h2>Users </h2>
            {!this.state.users && this.state.loading ? (
            <Spinner />
        ) : (
          <div>
            <UsersStyle>
              {this.state.users.map(user => {
                return (
                    <PlayerContainer key={user.id}>
                        <Button3 onClick={() => {
                          this.routeChange(user)
                        }}>
                          <Player user ={user}/>
                        </Button3>

                    </PlayerContainer>
                );
              })

              }
            </UsersStyle>
            <Button2
              width="100%"
              onClick={() => {
                // logout
                {Logout(this.props)}
              }}
            >
              Logout
            </Button2>

              {/*<Button2*/}
                  {/*width="100%"*/}
                  {/*onClick={() => {*/}
                    {/*this.goSettings()*/}
                  {/*}}*/}
              {/*>*/}
                {/*User Settings*/}
              {/*</Button2>*/}

          </div>
        )}
      </BoxContainer>
        </RootContainer>
    );
  }
}

export default withRouter(Game);
