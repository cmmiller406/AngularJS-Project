"use strict";

const resultsList = {
    templateUrl: "app/components/results-list.html",
    controller: ["ProjectService", function(ProjectService) {
        const vm= this;
    }]

};


angular 
    .module("App")
    .component("resultsList", resultsList);