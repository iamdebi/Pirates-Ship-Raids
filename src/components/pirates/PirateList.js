import React from 'react';
import Pirate from './Pirate.js';


const PirateList = (props) => {

	if (props.pirates.length === 0){
	  return (<p>Loading...</p>)
	}

	const pirates = props.pirates.map((pirate, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Pirate pirate={pirate} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {pirates}
	  </ul>
	)
}
 export default PirateList;
