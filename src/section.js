import React from "react";
import "./section.css"

const Section = props => (
	<div onClick={() => props.setUp(props.id)} className="section">
		<div className="img-container">
      		<img alt='' src={props.image} />
    	</div>
  </div>
);
export default Section;



























// abandon original idea and made .json of images instead


// import bigyellowmush from './bigyellowmush.jpg';
// import bluemush from './bluemush.jpg';
// import chainchomp from './chainchomp.jpg';
// import ogmush from './ogmush.jpg';
// import ogpixelmush from './ogpixelmush.jpg';
// import pixelmush from './pixelmush.jpg';
// import pixelstar from './pixelstar.png';
// import plupstar from './plupstar.jpg';
// import popstar from './popstar.jpg';
// import shinymush from './shinymush.jpg';
// import redmush from './redmush.jpg';
// import silvermush from './silvermush.jpg';

// const Section = props => (
//     <div className="container">

//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}> <img src={bigyellowmush} alt="bigyellowmush" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={bluemush} alt="bluemush" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={chainchomp} alt="chainchomp" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={ogmush} alt="ogmush" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={ogpixelmush} alt="ogpixelmush" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={pixelmush} alt="pixelmush" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={pixelstar} alt="pixelstar" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={plupstar} alt="plupstar" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={popstar} alt="popstar" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={shinymush} alt="shinymush" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={redmush} alt="redmush" /> </button>
//         <button type="button" value={props.value} className="btn btn-primary btn-lg" onClick={props.handleIncrement}><img src={silvermush} alt="silvermush" /> </button>

//     </div>
// );