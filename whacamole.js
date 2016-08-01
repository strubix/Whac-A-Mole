/**
 * Created by lucas on 02/08/2016.
 */
function Game() {
    var self = this;
    this.width = 600;
    this.height = 800;
    this.container = d3.select("#game");
    this.svg = this.container.append("svg").attr("id", "main").attr("width", this.width).attr("height", this.height);

    this.mainMenu = function () {
        self.svg.append("svg:image")
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', self.width)
            .attr('height', self.height)
            .attr("xlink:href","svg/main_menu.svg");
        self.svg.append("text")
            .attr("id", "game_play")
            .attr("x", self.width / 2)
            .attr("y", (self.height / 2) - 50)
            .attr("text-anchor", "middle")
            .attr("font-family", "Arial Black")
            .attr("font-size", "3em")
            .attr("fill", "#fff")
            .text("Play")
            .on("click", function() { alert("Game will start !"); });
    };

    this.mainMenu();
}


/* Game initialisation */
document.addEventListener("DOMContentLoaded", function() {
    new Game();
});
