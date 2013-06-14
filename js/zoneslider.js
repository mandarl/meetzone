define(['ruler'], function(Ruler){
    
    var ZoneSlider = function(paper) {
        this.paper = paper;
        
        // Initialize the invisible dragger
        this.timelineDragger = paper.rect(0,40, this.paper.width, 60);
        this.timelineDragger.attr({"fill": "#fff", "opacity":0});
        this.timelineDragger.drag(this.timelineDragging, this.timelineDrag_start, this.timelineDrag_end,this,this);
        this.timelineDragger.hover(this.timelineDrag_hover_start, this.timelineDrag_hover_end,this);
        
        this.ruler = new Ruler(paper);
    };

    ZoneSlider.prototype.plotCity = function(cityTime) {
        console.log("Plotting " + cityTime.name + " at " + cityTime.offset);
    };
    
    ZoneSlider.prototype.timelineDragging = function(dx, dy) {
        if(dx%2 === 0)
            window.pubsub.publish("drag", null, {'dx': dx, 'dy': dy});
    };

    ZoneSlider.prototype.timelineDrag_start = function() {
        console.log('drag.start');
        window.pubsub.publish("drag.start", null);
    };
    
    ZoneSlider.prototype.timelineDrag_end = function() {
        console.log('drag.end');
        window.pubsub.publish("drag.end", null);
    };
    
    
    return ZoneSlider;
});
