/**
 * Created by lucas on 28/07/2016.
 */

function Game(){
    var self = this;
    this.container = $('#game');
    this.svg = $('svg');

    this.render = function(template){
        for (var i = 0; i < template.length; i++) {
            self.svg.append(template[i]);
        }
        self.container.html(self.container.html());
    };

    this.gameMenu = [
        '<rect id="background" x="0" y="0" width="600" height="800" fill="#000"/>'
    ]
}

// Initialise game
$(document).ready(function () {
    var game = new Game();
    game.render(game.gameMenu);

});
