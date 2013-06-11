define(["jquery", "modernizr", "yepnope", "bootstrap", "polyfill"], function() {

$(document).ready(function() {
    doPolyFill();
    $.getJSON('data/cities.json', function(data) {
        citiesdata =data;
        var names = [];
        $.each(citiesdata, function(name, value) {
            names.push(name + ', ' + value[1]);
        });
        $('#city-search').typeahead({
            source: names,
            matcher: function (item) {
                if (item.toLowerCase().indexOf(this.query.trim().toLowerCase()) != -1) {
                    return true;
                }
            },
            updater: function(item) {
                console.log(item);
            }
        });
        showContent();
    })
});


});

var citiesdata;

function showContent() {
    $('#loading-screen').hide();
    $('#content').show();
}

