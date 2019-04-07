//@Author Fabian Küffer 15-931-421


import React from "react";
import {RootContainer,BoxContainer, Form, Label, Text} from "../../../helpers/myLayout";
import {Button2} from "../../../views/design/Button";
import {withRouter} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <BoxContainer>
            <Form>
            <Text>Error! Wrong URL</Text>
                <Button2
                    width="100%"
                    onClick={() => {
                        window.location.href = '../';
                    }}>
                    Home
                </Button2>
            </Form>
        </BoxContainer>
    );
};

export default withRouter(ErrorPage);