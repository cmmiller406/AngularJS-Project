"use strict";

const resultsList = {
    templateUrl: "app/components/results-list.html",
    bindings: {
        addMovie: "&",
        isOn: "<",
        search: "&",
        movies: "<"
    },
    controller: ["FilmFinderFactory", function(FilmFinderFactory) {
        const vm = this;
        vm.addMovieToList = (movie) => {
            FilmFinderFactory.addMovieToList(movie);
        };
    }]

};


angular 
    .module("App")
    .component("resultsList", resultsList);