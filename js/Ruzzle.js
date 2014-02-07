// @Ruben Ureña-2013
// Ruzzle is a simple Puzzle made in Javascript using JQuery and JQuery Ui.
$(document).ready(function() {   
    function llenar(url) {
        var divsDraggables ='';
        var divsDroppables ='';
        for( var i = 0; i < 16; i++) {
            divsDraggables = divsDraggables + '<div class="div-' + i + '    draggable notable" style="background-image:url('+ url +')"></div>';
            divsDroppables = divsDroppables + '<div class="div-' + i + '    droppable notable-2" style="background-image:url('+ url +')"></div>'; 
        }
        $('.box').append( divsDraggables );
        $('.box-2').append( divsDroppables );
    };
      
    $(".imagen-A").click(function(){
        $(this).css("border-bottom", "none")
        $(".selection").show(350);
    });
    $(".img").click(function(){
        var y;
        llenar(this.src);
        $(".notable").show(1000);
        $(this).parent().hide(300);
        $(".imagen-A").hide(300);
        $(".reload").show(900);       
        $( ".box .draggable" ).draggable({
            drag: function( event, ui) {
                $(this).css("opacity","0.2")
                y = this;
            }
        });
        $( ".draggable" ).on( "dragstop", function( event, ui ) {
            $(this).css("opacity", "1");
        });
        $( ".droppable" ).droppable(  {
            drop: function( event, ui ) {

            }
        });
        $( ".droppable" ).on( "drop", function( event, ui ) {
           if( y.className.substring(0,7) == this.className.substring(0,7)) {
                $(y).hide(400);
                $(this).css("opacity", "1");
           };
        });
    });
    $(".reload").click(function(){
        location.reload();
    });
});