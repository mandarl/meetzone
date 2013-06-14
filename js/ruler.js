define([], function(){
    
    var Ruler = function(paper) {
        this.paper = paper;
        
        var self = this;
        
        window.pubsub.subscribe("drag", function(context, pos) {
            var newX = self.x + pos.dx;
            self._drawTickMark(newX);
            //console.log('dx:' + newX);
        });
        
        window.pubsub.subscribe("drag.start", function() {
            self.x = self.circle.attr('cx');
        });
        
        window.pubsub.subscribe("drag.end", function() {
            console.log('end');
            self.circle.animate({'cx': self.circle.attr('cx') + 60}, 500, '>');
        });
        
        this._drawTickMark(50);
    };
    
    Ruler.prototype._drawTickMark = function(x_offset) {
        if(this.circle !== undefined) {
            this.circle.attr({'cx': x_offset});
            //this.circle.translate(x_offset/10, 0);
        }
        else {
            this.circle = this.paper.circle(x_offset, 50, 20).attr({
                fill: "#ff0000",
                stroke: "#fff",
                "stroke-width": 2
            });//.darker(6);
        }
         
    };

    
    
    return Ruler;
});
