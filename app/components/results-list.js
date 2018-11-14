"use strict";

const resultsList = {
    templateUrl: "app/components/results-list.html",
    bindings: {
        addMovie: "&",
        isOn: "<",
        search: "&",
        movies: "<"
    }

};


angular 
    .module("App")
    .component("resultsList", resultsList);