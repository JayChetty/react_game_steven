var React = require('react');
var BackgroundBox = require('./BackgroundBox.jsx');

var GameBox = React.createClass({

  render: function() {
    return (
      <div className="GameBox">
      <div id='title'>
        <h1>StyroBlaster</h1>
      </div>

      <div className="BackgroundBox">
        <BackgroundBox/>
      </div>

      </div>
      );
  }


})

module.exports = GameBox;
