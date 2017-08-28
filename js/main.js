$(document).ready(function() {
   $('#toggle').click(function() {
       $(this).toggleClass('active');
       $('#overlay').toggleClass('open');
   });
    
    function slider_article() {
        var articles = [];
        var num_article = $('.slides-article>div').length;
        var num_group = Math.ceil( num_article / 4 );
        for( var i = 0; i < num_article; i++ ) {
            articles[i] = $('.slides-article>div').html();
            $('.slides-article>div:first-child').remove();
        }
        var group = '<div class="slides-group">';
        for( var j = 0; j < num_group; j++ ) {
            group += '<div class="group-article">';
            for( var z = 0; z < 4; z++ ) {
                if( articles[z] == undefined ) {
                    break;
                }
                else {
                    group += '<div class="article">' + articles[z] + '</div>';
                }
            }
            group += '</div>';
            articles.splice(0, 4);
        }
        group += '</div>';
        $('.slides-article').append(group);
        
        var sliderWidth = $('#slider-container').width();
        $('.group-article').width( sliderWidth );
        $('.slides-group').width( sliderWidth * $('.group-article').length );
        $('.slides-group').css( 'left', -sliderWidth );
        $('.group-article:last-child').prependTo('.slides-group');
        
        $(window).resize(function() {
            sliderWidth = $('#slider-container').width();
            $('.group-article').width( sliderWidth );
            $('.slides-group').width( sliderWidth * $('.group-article').length );
            $('.slides-group').css( 'left', -sliderWidth );
        });
        
        function next() {
            $('.slides-group').animate({
               'margin-left': -sliderWidth 
            }, 500, function() {
                $('.group-article:first-child').appendTo('.slides-group');
                $('.slides-group').css( 'margin-left', 0 );
            });
        }
        
        function prev() {
            $('.slides-group').animate({
               'margin-left': sliderWidth 
            }, 500, function() {
                $('.group-article:last-child').prependTo('.slides-group');
                $('.slides-group').css( 'margin-left', 0 );
            });
        }
        
        $('#nextSlide').click( next );
        $('#prevSlide').click( prev );
    }
    
    slider_article();
    
});