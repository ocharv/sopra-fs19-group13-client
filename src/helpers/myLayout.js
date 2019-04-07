//@Author Fabian Küffer 15-931-421


import styled from "styled-components";

export const DESKTOP_WIDTH = 1160;
export const SMALL_LAPTOPS_WIDTH = 970;
export const TABLETS_WIDTH = 750;
export const SMALL_WIDTH = 768;



//change background to white
// document.body.style = 'background:white';

export const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

export const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const FormContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 375px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 5px;
  background: linear-gradient(rgb(27, 124, 186), rgb(2, 46, 101));
  transition: opacity 0.5s ease, transform 0.5s ease;
`;


export const EqualDiv = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  //background: papayawhip;
  ${props => props.vertical && "flex-direction: column;"}
  > * {
    flex: 1;
    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;


export const BoxController = styled.div`
  display: flex;  
  visibility: visible;
  justify-content: space-between;
  max-width: 24em;
  min-width: 21em;
  height: 35px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.2);
  box-shadow: 0 0 20px 0 rgba(15, 15, 15, 0.2);
  margin-bottom: 30px;
  transition: visibility 0.5s ease-out;
  padding:1rem;
`;

export const RootContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;



export const SelectedController = styled.div`
    border-bottom: 2px solid dodgerblue;
`;


export const LoginController = styled.section`
    flex: 1;
    text-align: left;
    height: 100%;
    //line-height: 2;
    cursor: pointer;
`;

export const Text = styled.text`
  text-align: center;
  font-size: 30px;
  color: white;
  
  `;

export const Child = styled.div`
  padding:0.25rem 0.5rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%); 
  `;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 24em;
  min-width: 22em;
  box-shadow: 0 0 25px 0 rgba(15, 15, 15, 0.2);
  border-radius: 8px;
  padding: 24px;
`;
