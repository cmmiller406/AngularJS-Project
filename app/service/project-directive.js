"use strict";

function expandOnFocus () {
    return {
        restrict: "A",
        link: function($scope, $element, $attr) {
            $element.on("blur", () => {
                console.log("blur event");
                $element.css("height", "");
                $element.css("width", "");
                $element.css("font-size", "");

            });
            $element.on("focus", () => {
                console.log("focus event");
                $element.css("height", "40px");
                $element.css("width", "500px");
                $element.css("font-size", "30px");
            });
        }
    };
};


angular 
    .module("App")
    .directive("expandOnFocus", expandOnFocus);