function doPolyFill() {
    yepnope({
        test: Modernizr.input.placeholder,
        nope: [
                'css/placeholder_polyfill.min.css',
                'js/placeholder_polyfill.jquery.min.js'
              ]
        });
}