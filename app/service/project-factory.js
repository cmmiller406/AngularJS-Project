"use strict";

function FilmFinderFactory($http, $location) {
  let jsonPayload = null;   

  const loadWatch = () => {
    $location.path("/watchlist-page");

  };

  const searchMovie = (keyword) => {
 
    return $http({
      method: "GET", 
      url: `https://api.themoviedb.org/3/search/movie?api_key=a6e19e40ea2fd9ab20c2b6edf4b56aa5&query=${keyword}`,
    }).then((data) => {
      jsonPayload = data;
      return jsonPayload;
    });
  };

  return {
    searchMovie,
    loadWatch
  };
}


angular
  .module("App")
  .factory("FilmFinderFactory", FilmFinderFactory);