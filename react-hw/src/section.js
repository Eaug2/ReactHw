import React from "react";
import bigyellowmush from './bigyellowmush.jpg';
import bluemush from './bluemush.jpg';
import chainchomp from './chainchomp.jpg';
import ogmush from './ogmush.jpg';
import ogpixelmush from './ogpixelmush.jpg';
import pixelmush from './pixelmush.jpg';
import pixelstar from './pixelstar.png';
import plupstar from './plupstar.jpg';
import popstar from './popstar.jpg';
import shinymush from './shinymush.jpg';
import redmush from './redmush.jpg';
import silvermush from './silvermush.jpg';


const Section = props => (
    <div className= "container">
    
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}> <img src={bigyellowmush}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={bluemush}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={chainchomp}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={ogmush}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={ogpixelmush}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={pixelmush}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={pixelstar}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={plupstar}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={popstar}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={shinymush}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={redmush}/> </button>
    <button type="button" alt="" className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={silvermush}/> </button>

   </div>
);

export default Section;