"use strict";

const homePage = {
    template: `<p>home</p>`,
    controller: ["ProjectService", function(ProjectService) {
        const vm= this;
    }]

};


angular 
    .module("App")
    .component("homePage", homePage);