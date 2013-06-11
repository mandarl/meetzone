/*(function(){
define(['modernizr', 'yepnope', 'jquery'], function() {
    console.log('inside polyfill define' + yepnope + ' test:' + Modernizr.input.placeholder);
    yepnope({
        test: Modernizr.input.placeholder,
        nope: [
                'css/lib/placeholder_polyfill.min.css',
                'js/lib/placeholder_polyfill.jquery.min.js'
              ]
    });    

    placeHolderConfig = {
    // css class that is used to style the placeholder
        className: 'placeholder', 
    // expose the placeholder text to screenreaders or not
        visibleToScreenreaders : true,
    // css class is used to visually hide the placeholder
        visibleToScreenreadersHideClass : 'placeholder-hide-except-screenreader', 
    // css class used to hide the placeholder for all
        visibleToNoneHideClass : 'placeholder-hide',
    // either hide the placeholder on focus or on type
        hideOnFocus : true,
    // remove this class from a label (to fix hidden labels)
        removeLabelClass : 'visuallyhidden', 
    // replace the label above with this class
        hiddenOverrideClass : 'visuallyhidden-with-placeholder', 
    // allow the replace of the removeLabelClass with hiddenOverrideClass or not
        forceHiddenOverride : true, 
    // apply the polyfill even for browser with native support
        forceApply : false, 
    // init automatically or not
        autoInit : true 
}
    
});
})();
*/

function doPolyFill() {
    yepnope({
        test: Modernizr.input.placeholder,
        nope: [
                'css/lib/placeholder_polyfill.min.css',
                'js/lib/placeholder_polyfill.jquery.min.js'
              ]
        });
}

placeHolderConfig = {
    // css class that is used to style the placeholder
        className: 'placeholder', 
    // expose the placeholder text to screenreaders or not
        visibleToScreenreaders : true,
    // css class is used to visually hide the placeholder
        visibleToScreenreadersHideClass : 'placeholder-hide-except-screenreader', 
    // css class used to hide the placeholder for all
        visibleToNoneHideClass : 'placeholder-hide',
    // either hide the placeholder on focus or on type
        hideOnFocus : true,
    // remove this class from a label (to fix hidden labels)
        removeLabelClass : 'visuallyhidden', 
    // replace the label above with this class
        hiddenOverrideClass : 'visuallyhidden-with-placeholder', 
    // allow the replace of the removeLabelClass with hiddenOverrideClass or not
        forceHiddenOverride : true, 
    // apply the polyfill even for browser with native support
        forceApply : false, 
    // init automatically or not
        autoInit : true 
}