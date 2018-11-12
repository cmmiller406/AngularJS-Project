"use strict";

const favoritesPage = {
    template: `<p>favorites</p>`,
    controller: ["ProjectService", function(ProjectService) {
        const vm= this;
    }]

};


angular 
    .module("App")
    .component("favoritesPage", favoritesPage);