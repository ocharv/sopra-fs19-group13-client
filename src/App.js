import React, { Component } from "react";
import Header from "./views/Header";
import AppRouter from "./components/shared/routers/AppRouter";
import styled from "styled-components";
import myImg from "./image/jonathan-gallegos-727409-unsplash.jpg"
import {EqualDiv} from "./helpers/myLayout";

/**
 * Happy coding!
 * React Template by Lucas Pelloni
 */


const DivStyle = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
    position: fixed;
    //top: 0;
    //left: 0;
    width: 100%;
    height: 100%;
    //border-top: 50px solid transparent;
    //border-bottom: 80px solid transparent;
    background:white;
 
    background: url(${myImg});
    //background-position-x: center;
    //background-position-y: center;
    background-size: cover;
    //background-repeat-x: no-repeat;
    //background-repeat-y: no-repeat;
    background-attachment: fixed;
    //background-origin: initial;
    //background-clip: initial;
    //background-color: initial;
    //background-size: cover;
    //background-position: center center;
    //background-repeat: no-repeat;
    //bottom:0px;
    
`;

const Header2 = styled.h1`
    position: absolute;
    //top: 13%;
    top: -1%;
    left: 5%;
    height: 10%;
    width: 100%;
    //left: 36%;
    font-size:5em;
    
    //display:flex;
    //margin: -15% 0 0 -25%;
  
  //margin-top:-50px;
  //align-self: center;
  //height:500px;
`;


class App extends Component {
  render() {
    return (
        <div>
                {/*<Header height={"0"} />*/}
            <DivStyle>
                <Header2>SANTORINI G13</Header2>


                <AppRouter />
                </DivStyle>
        </div>
    );
  }
}

export default App;
