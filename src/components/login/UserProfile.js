//@Author Fabian Küffer 15-931-421


import React from "react";
import {Form, Label, BoxContainer, ButtonContainer, InputField,FormContainer, RootContainer,BoxController, Text, EqualDiv, SelectedController, Controller, LoginController, Child} from "../../helpers/myLayout";
import {convertDate} from "../../helpers/convertDate";


export const  UserProfile =({user})=>{
    return (
            <div>
                <EqualDiv>
                    <Label>ID: {user.id}</Label>
                    <Label>{user.username}</Label>
                    <Label>{user.status}</Label>
                </EqualDiv>
                <div>
                    <Label>
                        Creation Date:
                        {convertDate(user.createdDate)}
                    </Label>
                </div>
                <div>
                    {(user.birthday!==null?
                        <Label>Birthday: {user.birthday}</Label>
                        :"")
                    }
                </div>
            </div>
    );
};
