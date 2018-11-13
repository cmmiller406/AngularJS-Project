"use strict";

const watchListPage = {
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
    .component("watchListPage", watchListPage);

// form is hidden but need to rework it to get it to reappear