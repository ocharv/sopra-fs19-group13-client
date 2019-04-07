//@Author Fabian Küffer 15-931-421


import React from "react";
import { withRouter,Router,Route, BrowserRouter} from "react-router-dom";
// import { Button } from "../../views/design/Button";
import {Form, FormContainer, RootContainer,BoxController, EqualDiv, SelectedController, Controller, BoxContainer,LoginController, Child} from "../../helpers/myLayout";
import Register from "./Register.js";
import Login from "./Login";


export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogin:true,
            isRegistration:false
        };
    }


    showLogin(){
        //shows loginbox if isLogin is true
        this.setState({isLogin:true, isRegistration: false});
    }

    showRegistration(){
        //shows registrationbox is isRegistration is true
        this.setState({isRegistration:true, isLogin: false});
    }
    render(){
        return (
            <RootContainer>
                <BoxController>

                    <LoginController
                        onClick={this.showLogin.bind(this)}
                    >
                        {(this.state.isLogin ?
                            <div>

                                <Child>LOGIN</Child>
                                <SelectedController/>

                            </div>
                            :
                            <Child>LOGIN</Child>)}

                    </LoginController>

                    <LoginController
                        onClick={this.showRegistration.bind(this)}>
                        {(this.state.isRegistration ?
                            <div>

                                <Child>REGISTER</Child>
                                <SelectedController/>

                            </div>
                            :
                            <Child>REGISTER</Child>)}
                    </LoginController>
                </BoxController>



                <BoxContainer>
                    <div>
                        {this.state.isLogin && <Route path="/login" exact
                                                      render={()=> (
                                                          <Login/>
                                                      )}/>
                        }

                        {this.state.isRegistration && <Route path="/login" exact
                                                             render={()=>(
                                                                 <Register/>
                                                             )}/>
                        }
                    </div>
                </BoxContainer>
            </RootContainer>
        );
    }
}

export default withRouter(Home)