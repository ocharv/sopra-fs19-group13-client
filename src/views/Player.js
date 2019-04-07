import React from "react";
import styled from "styled-components";
import { Button3 } from "../views/design/Button";
import {BoxContainer,EqualDiv} from "../helpers/myLayout";
import {withRouter,BrowserRouter} from "react-router-dom";

const Container = styled.div`
  margin: 6px 0;
  width: 280px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  border: 1px solid #ffffff26;
  float:left;
 
`;

const Container2 = styled.div`
  //margin:6px 0;
  width:280px;
  //padding: 1px;
  margin-left: 10px;
  margin-right: 10px;
  //display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid #ffffff26;

  
 `;


const UserName = styled.div`
  font-weight: lighter;
  margin-left: 5px;
`;

const Name = styled.div`
  font-weight: bold;
  color: #06c4ff;
  float:left;
  
`;

const Id = styled.div`
  //margin-left: auto;
  //margin-right: 10px;
  font-weight: bold;
  float:right;
  //overflow: auto;
  //padding: 10px;
`;




/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const Player = ({ user }) => {

    return (
            <Container2>
            <Name>{user.username}</Name>
            <Id>Id: {user.id}</Id>
            </Container2>
    );
};

export default Player;
