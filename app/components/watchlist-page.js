"use strict";

const favoritesPage = {
    template: `<p>Watchlist</p>
    <form class="wlclass" ng-show="$ctrl.show">
        <p class="" input name="picture" ng-model="Picture">Picture image here<p>
        <p class="wltitle" input name=" title" ng-model="Title">Title</p>
        <p class="wlgenre" input name=" Genre" ng-model="Genre">Genre</p>
        <p class="wlrating" input name="rating" ng-model="Rating">Rating</p>
        <p class="wlyear" input name="year" ng-model="Year">Year</p>
    </form>
        <button class=""ng-click="$ctrl.showForm();" ng-submit="$ctrl.showForm();">Remove From Watchlist</button>
    
    
    
    `,
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