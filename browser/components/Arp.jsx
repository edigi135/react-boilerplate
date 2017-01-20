'use strict';

import React from 'react';

export default (props) => {
	console.log('Props from Arp.jsx', props)
	return (
		<div>
			<a className="waves-effect waves-light btn-large"
					onClick={ props.playArp }
					>
			<i className="material-icons right">play_arrow</i>Play</a>
		</div>
	);
};