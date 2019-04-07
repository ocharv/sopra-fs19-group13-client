//@Author Fabian Küffer 15-931-421


import React from "react";
import {getDomain} from "./getDomain";
import {Link,withRouter} from "react-router-dom";

export const Logout = () => {

    let path=`${getDomain()}/logout/`;
    let token = localStorage.getItem("token");
    const status = response =>{
        if(response.status !== 405){
            return Promise.resolve(response);
        }

        return Promise.reject(new Error(response.statusText));
    }
    const str = response => response.text();

    fetch(path, {
        method: "PUT",
        // mode : 'no-cors',
        headers: {
            "Content-Type": "text/plain",
            // "Accept": "application/json",
            // "token": localStorage.getItem("token")

        },
        body:
                token
            // status: "OFFLINE"

    })

        .then(status)
        .then(str)
        .then(data =>{
            localStorage.clear();
            alert("logged out!");
            return window.location.href = `/login`;
            }
        )

        .catch(error => {
            console.log(error);
        });

};
export default withRouter(Logout);