$(document).ready(function(){
    var imgItems = $('.slider li').length;
    var imgPos = 1;


   for (i = 1; i <= imgItems; i++) {
        $('.paginacion').append('<i class="material-icons">lens</i>');
        
    }
    $('.slider li').hide();
    $('.slider li:first').show();
    $('.paginacion i:first').css({'color': '#e2ac00'});

    $('.paginacion i').click(pagination);
    $('.derecha i').click(nextSlider)
    $('.izquierda i').click(prevSlider)

    setInterval(function(){
        nextSlider()
    }, 4000);

    function pagination() {
        var paginationPos = $(this).index() + 1;

        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPos +')').fadeIn()
        $('.paginacion i').css({'color': '#5a3c90'})
        $(this).css({'color': '#e2ac00'});

        imgPos = paginationPos;
    }
    function nextSlider() {
        if (imgPos >= imgItems) {
            imgPos = 1;
        }
        else{
            imgPos++;
        }

        $('.paginacion i').css({'color': '#5a3c90'})
        $('.paginacion i:nth-child('+ imgPos +')').css({'color': '#e2ac00'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }
    function prevSlider() {
        if (imgPos <= 1) {
            imgPos = imgItems;
        }
        else{
            imgPos--;
        }

        $('.paginacion i').css({'color': '#5a3c90'})
        $('.paginacion i:nth-child('+ imgPos +')').css({'color': '#e2ac00'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }
});

