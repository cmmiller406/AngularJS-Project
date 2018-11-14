"use strict";


const watchListPage = {
    templateUrl: "app/components/watchlist-page.html"
    
    ,
    controller: ["FilmFinderFactory", function(FilmFinderFactory) {
        const vm= this;
        vm.displayHome = () => {
            FilmFinderFactory.loadHome();

        };
    }]

};


angular 
    .module("App")
    .component("watchListPage", watchListPage);


// form is hidden but need to rework it to get it to reappear