var React = require('react');

var BackgroundBox = React.createClass({
  componentDidMount:function(){
    this.drawBackground();
  },

  drawBackground: function(){
    var canvas = this.refs.myCanvas;
    // var canvas = document.getElementById("background");
    console.log("canvas", canvas);
    var ctx = canvas.getContext("2d");
    canvas.width = 900;
    canvas.height = 500;

    var velocity=100;
    var bgImage = new Image();
    bgImage.addEventListener('load',drawImage,false);
    bgImage.src = "https://i.ytimg.com/vi/T40NSkd7Olc/maxresdefault.jpg";
    function drawImage(time){

            var framegap=time-lastRepaintTime;
            var lastRepaintTime=time;
            var translateX=velocity*(framegap/1000);
            ctx.clearRect(0,0,canvas.width,canvas.height);
            var pattern=ctx.createPattern(bgImage,"repeat-x");
            ctx.fillStyle=pattern;
            ctx.rect(translateX,0,bgImage.width,bgImage.height);
            ctx.fill();
            ctx.translate(-translateX,0);
            requestAnimationFrame(drawImage);
    };
    var lastRepaintTime=window.performance.now();
  },

  render: function() {
    return (
      <div id="main">
      <canvas ref="myCanvas"></canvas>
      </div>
  )}

})

module.exports = BackgroundBox;
