'use strict';

import React from 'react';
import ArpContainer from '../containers/Arp_container';

export default (props) => {
	return (
		<div>
			<a className="waves-effect waves-light btn-large"
					onMouseDown={ props.playNote }
					onMouseUp={ props.stopNote }>
			<i className="material-icons right">play_arrow</i>Play</a>
			<ArpContainer/>
		</div>
	);
};