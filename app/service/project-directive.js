"use strict";

function expandOnFocus () {
    return {
        restrict: "A",
        link: function($scope, $element, $attr) {
            $element.on("click", () => {
                $element.css("display",);
            });
        }
    };
};


angular 
    .module("App")
    .directive("expandOnFocus", expandOnFocus);