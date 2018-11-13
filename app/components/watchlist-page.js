"use strict";

const watchlistPage = {
    templateUrl: "app/components/watchlist-page.html",
    controller: ["ProjectService", function(ProjectService) {
        const vm= this;
        vm.showForm = () => {
            vm.show= true;
        }
    }]

};


angular 
    .module("App")
    .component("watchlistPage", watchlistPage);

// form is hidden but need to rework it to get it to reappear