/**
 * Created by lucas on 02/08/2016.
 */
function Game() {
  var self = this;
  this.width = 600;
  this.height = 800;
  this.container = d3.select("#game");
  this.svg = this.container.append("svg").attr("id", "main").attr("width", this.width).attr("height", this.height);

  this.time = 0;

  this.gameTime = 0;
  this.gameScore = 0;

  this.difficulty = 4;

  this.appendMole = function() {
    function randomize(max, min) {
      return Math.random() * (max - min) + min;
    }
    var id = "mole" + Math.random().toString(36).substring(7);
    self.svg.append("svg:image")
        .attr('width', 60)
        .attr('height', 60)
        .attr('id', id)
        .attr("x", randomize(this.width - 50, 20))
        .attr("y", randomize(this.height - 50, 150))
        .attr("xlink:href", "svg/mole.svg")
        .on("click", function() {
          this.remove();
          self.gameScore += 10;
          d3.select("#game_score").html('Score : ' + self.gameScore);
        })
        .on("onmousedown", function() {
          return false;
        });

    var moleTime = randomize(self.gameTime + 5000, self.gameTime + 1000);
    var mole = setInterval(function() {
      if (self.gameTime >= moleTime) {
        d3.select('#' + id).remove();
        clearInterval(mole);
      }
    }, 200);
  };

  this.setTemplate = function(file) {
    d3.select("svg").html("");
    self.svg.append("svg:image")
        .attr('width', self.width)
        .attr('height', self.height)
        .attr("xlink:href", "svg/" + file + ".svg");
  };

  this.mainMenu = function() {
    self.setTemplate('main_menu');
    self.svg.append("text")
        .attr("id", "game_play")
        .attr("x", self.width / 2)
        .attr("y", (self.height / 2) - 50)
        .attr("text-anchor", "middle")
        .attr("font-family", "Arial Black")
        .attr("font-size", "3em")
        .attr("fill", "#fff")
        .text("Play")
        .on("click", function() {
          self.start()
        });
  };

  this.start = function() {
    self.time = new Date().getTime();
    self.gameScore = 0;
    self.setTemplate('game');
    self.svg.append("text")
        .attr("id", "game_time")
        .attr("x", self.width / 2)
        .attr("y", 40)
        .attr("text-anchor", "middle")
        .attr("font-family", "Arial Black")
        .attr("font-size", "1em")
        .attr("fill", "#fff")
        .text("Time : 0");
    self.svg.append("text")
        .attr("id", "game_score")
        .attr("x", 50)
        .attr("y", 40)
        .attr("text-anchor", "left")
        .attr("font-family", "Arial Black")
        .attr("font-size", "1em")
        .attr("fill", "#fff")
        .text("Score : 0");

    var game = setInterval(function() {
      self.gameTime = new Date().getTime() - self.time;
      d3.select("#game_time").html('Time : ' + Math.round(self.gameTime / 1000));
      if (self.gameTime >= 30000) {
        clearInterval(game);
        clearInterval(addMole);
        self.end();
      }
    }, 1000);
    var addMole = setInterval(function() {
      if(Math.round(Math.random()) % 2 === 0){
        self.appendMole();
      }
    }, 200);
  };

  this.end = function() {
    self.gameTime = 0;
    self.setTemplate('game');
    self.svg.append("text")
        .attr("id", "game_score")
        .attr("x", self.width / 2)
        .attr("y", self.height / 2 - 30)
        .attr("text-anchor", "middle")
        .attr("font-family", "Arial Black")
        .attr("font-size", "3em")
        .attr("fill", "#fff")
        .text('Your score : ' + self.gameScore);
    self.svg.append("text")
        .attr("id", "replay")
        .attr("x", self.width / 2)
        .attr("y", self.height / 2 + 30)
        .attr("text-anchor", "middle")
        .attr("font-family", "Arial Black")
        .attr("font-size", "3em")
        .attr("fill", "#fff")
        .text("Play again")
        .on("click", function() {
          self.start()
        });
  };

  this.mainMenu();
}

/* Game initialisation */
document.addEventListener("DOMContentLoaded", function() {
  new Game();
});
