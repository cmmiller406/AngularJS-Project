"use strict";

const homePage = {
    templateUrl: "app/components/home-page.html",
    controller: ["FilmFinderFactory", function(FilmFinderFactory) {
        const vm= this;
        vm.isOn =false;
        vm.search = (keyword) => {
            FilmFinderFactory.searchMovie(keyword).then((data) => {
                console.log(data);
              vm.movies = data.data.results;
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


        
    



    
    }]

};


angular 
    .module("App")
    .component("homePage", homePage);