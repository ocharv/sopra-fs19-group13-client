//@Author Fabian Küffer 15-931-421


import React from "react";


export function convertDate(str){
    var date = new Date(str);
    return date.toLocaleDateString();
}
