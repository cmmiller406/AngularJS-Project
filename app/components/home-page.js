"use strict";

const homePage = {
    templateUrl: "app/components/home-page.html",
    controller: ["FilmFinderFactory", function(FilmFinderFactory) {
        const vm= this;
        vm.watchList = [];
        vm.isOn =false;
        vm.search = (keyword) => {
            FilmFinderFactory.searchMovie(keyword).then((data) => {
                vm.movies = data;
                if (vm.isOn === false) {
                    vm.isOn = true;
                } else {
                    vm.isOn = false;
                }
            });
        };

        vm.displayList = () => {
            FilmFinderFactory.loadWatch();
        };


        vm.addMovie = (movie) => {
            vm.watchList.push(angular.copy(movie));
            console.log(vm.watchList);
        };


    }]

};


angular 
    .module("App")
    .component("homePage", homePage);