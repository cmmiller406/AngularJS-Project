"use strict";

const homePage = {
    templateUrl: "app/components/home-page.html",
    controller: ["FilmFinderFactory", function(FilmFinderFactory) {
        const vm= this;
        vm.search = (keyword) => {
            FilmFinderFactory.searchMovie(keyword).then((data) => {
                console.log(data);
              vm.movies = data.data.results;
            });
        };

        vm.displayList = () => {

        }

        vm.expandInfo = () => {
            
        }
    
    }]

};


angular 
    .module("App")
    .component("homePage", homePage);