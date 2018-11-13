"use strict";

const favoritesPage = {
    templateUrl: "app/components/watchlist-page.html"
    
    ,
    controller: ["ProjectService", function(ProjectService) {
        const vm= this;
        vm.showForm = () => {
            vm.show= true;
        }
    }]

};


angular 
    .module("App")
    .component("favoritesPage", favoritesPage);

// form is hidden but need to rework it to get it to reappear