"use strict";

function FilmFinderFactory($http) {
    let jsonPayload = null;

    /*{
        "genres": [
            {
                "28":"Action"
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 99,
                "name": "Documentary"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10751,
                "name": "Family"
            },
            {
                "id": 14,
                "name": "Fantasy"
            },
            {
                "id": 36,
                "name": "History"
            },
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 10402,
                "name": "Music"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 10749,
                "name": "Romance"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            },
            {
                "id": 10770,
                "name": "TV Movie"
            },
            {
                "id": 53,
                "name": "Thriller"
            },
            {
                "id": 10752,
                "name": "War"
            },
            {
                "id": 37,
                "name": "Western"
            }
        ]
    }
    
*/
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