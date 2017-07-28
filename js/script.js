//default grid size 16
//Change Size alert for a grid size
//create a grid with the size requested
//

$(document).ready(function () {
    makeGrid(16);

});

var $container = $('.container');




//-----------------erase draw pad----------------

$('.erase').on('click', function () {
    $('.container').find('.tile').removeClass('colorTile');
});

function emptyContainer() {
    $container.empty();

}


//-------------Create grid------------------

function makeGrid(number) {
    emptyContainer();

    for (var i = 0; i < (number * number); i++) {
        $container.append('<div class="tile"></div');
    };
    $('.tile').css({
        'width': 'calc(100% /' + number + ')',
        'height': 'calc(100% /' + number + ')',
    })

};

//------------resets the grid to the input variables--------------

$('.size').on('click', function () {
    emptyContainer();
    var size = parseInt(prompt('Enter a value between 2 and 100'));
    

    if (size < 2 || size > 100) {
        alert('The selected size is not within the specified limits. Defaulting to 16!');
        makeGrid(16);
    } else {
        makeGrid(size);
    }
});


//---------------------Draw!-----------------------------------

$('div').on('mouseenter', '.tile', function () {
    //$(this).removeClass('blankTile');
    $(this).addClass('colorTile');

});
