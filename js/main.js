define(["jquery", "raphael", "polyfill", "bootstrap"], function($) {

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
                    if (item.toLowerCase().indexOf($.trim(this.query).toLowerCase()) != -1) {
                        return true;
                    }
                },
                updater: function(item) {
                    console.log(item);
                }
            });
            drawZoneslider();
            showContent();
        });
    });
    
    
    function drawZoneslider() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var paper = Raphael("zoneslider",width-10,500);
        console.log("Drawing zoneslider");
        //zoneslider = new ZoneSlider(paper);
    };


});


var citiesdata;

function showContent() {
    $('#loading-screen').hide();
    $('#content').show();
}

