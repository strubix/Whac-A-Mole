/**
 * Created by lucas on 28/07/2016.
 */

// Turns a selected div into a gamefield
function Game(selector){
    selector.css({
        width: '600px',
        height: '800px',
        'background': 'black',
        margin: '0 auto'
    })
}

// Initialise game
$(document).ready(function () {
    new Game($('#game'));
});