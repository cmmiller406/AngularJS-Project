"use strict";

const searchPage = {
    templateUrl: "app/components/search-page.html",
    
    bindings: {
        search: "&",
        movies: "<"

    }
};


angular 
    .module("App")
    .component("searchPage", searchPage);