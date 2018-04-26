import React from "react";
import "./jumbo.css";

const Jumbo = (props) => (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Clicky Game!</h1>
      <p className="lead">Click on an Image to Earn Points!</p>
      <br/>
      <p className="lead">Don't Click on the Same Image!</p>

      <p className="lead">
      Score:{props.score} | High Score: {props.highScore}
    </p>
    </div>
  </div>
);

export default Jumbo;