/**
 * Created by lucas on 28/07/2016.
 */

// Turns a selected div into a gamefield
function Game(selector){

}

function GameMenu(selector){

}

// Initialise game
$(document).ready(function () {
    var $game = $('#game'),
        $svg  = $('svg');

    // $svg.append('<rect id="rect1" x="160" y="10" width="60" height="60" fill="blue"/>');
    $svg.append('<rect id="rect2" x="0" y="0" width="600" height="800" fill="#000"/>');
    $game.html($game.html());
});