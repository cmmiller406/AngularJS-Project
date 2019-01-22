"use strict";

const resultsList = {
    templateUrl: "app/components/results-list.html",
    bindings: {
        isOn: "<",
        search: "&",
        movies: "<"
    },
    controller: ["FilmFinderFactory", function(FilmFinderFactory) {
        const vm = this;
        
        /*$(".result-img").on("click", () => {
                
            console.log("Toggle worked!");
            $(".single-result").css("height", "400px");
            $(".summary").css("display", "inline");

        });*/
        
        vm.addMovieToList = (movie) => {
            FilmFinderFactory.addMovieToList(movie);
        };
    }]

};


angular 
    .module("App")
    .component("resultsList", resultsList);