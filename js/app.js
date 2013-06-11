requirejs.config({
    "baseUrl": "js",
    "paths": {
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min",
        "jquery-ui": "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
        "modernizr": "../components/modernizr/modernizr",
        "yepnope": "../components/yepnope/yepnope.1.5.4-min",
        "bootstrap": "lib/bootstrap.min",
        "polyfill": "polyfill",
        "raphael": "../components/raphael/raphael-min",
        "eve": "../components/eve-adobe/eve.min"
    },
    shim: {
        'eve': {
            exports: 'eve'
        },
        'raphael': {
            deps: ['eve'],
            exports: "Raphael"
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }

});

// Load the main app module to start the app
requirejs(["main"]);