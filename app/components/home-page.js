"use strict";

const homePage = {
    templateUrl: "app/components/home-page.html",
    controller: ["ProjectService", function(ProjectService) {
        const vm= this;
    }]

};


angular 
    .module("App")
    .component("homePage", homePage);