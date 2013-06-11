requirejs.config({
    "baseUrl": "js",
    "paths": {
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min",
        "jquery-ui": "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
        "modernizr": "../components/modernizr/modernizr",
        "yepnope": "../components/yepnope/yepnope.1.5.4-min",
        "bootstrap": "lib/bootstrap.min",
        "polyfill": "polyfill"
    }
});

// Load the main app module to start the app
requirejs(["main"]);