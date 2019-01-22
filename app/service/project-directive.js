"use strict";

function showSummary () {
    return {
        restrict: "A",
        link: function($scope, $element, $attr) {

        
            $element.on("click", () => {
                
                let result = document.getElementsByClassName("single-result");
                let wrappedResult = angular.element(result);
                console.log("Toggle worked!");
                
                wrappedResult.css("height", "400px");
                let summaryResult = document.getElementsByClassName("summary");
                let wrappedSummaryResult = angular.element(summaryResult);
                wrappedSummaryResult.css("display", "inline");
        

            });
        }
    };
};


angular 
    .module("App")
    .directive("showSummary", showSummary);