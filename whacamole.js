/**
 * Created by lucas on 28/07/2016.
 */

// Turns a selected div into a gamefield
function Game(selector){
    selector.css({
        width: '600px',
        height: '800px',
        background: 'black',
        margin: '0 auto',
        position: 'relative'
    });

    selector.append('<h2 id="game_title">Whac A Mole !</h2>').css({
        color: '#fff',
        'text-align': 'center',
        padding: '10px 0 0 0'
    });
    new GameMenu(selector);
}

function GameMenu(selector){
    selector.append('<div id="game_menu"><ul>Game menu<li id="start">Start</li></ul></div>');
    $('#game_menu').css({
        background: '#fff',
        width: '50%',
        height: '50%',
        position: 'absolute',
        bottom: '10%',
        left: '25%'
    });
    $('#game_menu ul').css({
        color: '#000'
    });

    $('#game_menu ul li').on('mouseover', function () {
        $(this).css({
            background: '#000',
            color: '#fff',
            cursor: 'pointer'
        })
    }).on('mouseout', function () {
        $(this).css({
            background: '#fff',
            color: '#000',
            cursor: 'pointer'
        })
    });

    $('#start').on('click', function () {
        $('#game_menu').remove();
    })
}

// Initialise game
$(document).ready(function () {
    new Game($('#game'));
});