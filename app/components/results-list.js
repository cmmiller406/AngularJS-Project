"use strict";

const resultsList = {
    template: `<p>results</p>`,
    controller: ["ProjectService", function(ProjectService) {
        const vm= this;
    }]

};


angular 
    .module("App")
    .component("resultsList", resultsList);