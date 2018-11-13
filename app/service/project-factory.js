"use strict";

function FilmFinderFactory($http) {
  let jsonPayload = null;   

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
    searchMovie
  };
}


angular
  .module("App")
  .factory("FilmFinderFactory", FilmFinderFactory);