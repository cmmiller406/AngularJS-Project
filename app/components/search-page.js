"use strict";

const searchPage = {
    templateUrl: "app/components/search-page.html",
    controller: ["ProjectService", function(ProjectService) {
        const vm= this;
    }]
};


angular 
    .module("App")
    .component("searchPage", searchPage);