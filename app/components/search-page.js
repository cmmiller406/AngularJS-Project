"use strict";

const searchPage = {
    template: `<p>search</p>`,
    controller: ["ProjectService", function(ProjectService) {
        const vm= this;
    }]
};


angular 
    .module("App")
    .component("searchPage", searchPage);