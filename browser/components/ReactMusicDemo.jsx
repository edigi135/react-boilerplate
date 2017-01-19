import React from 'react';
import {Song, Sequencer} from 'react-music';

export default (props) => {
	console.log(Song);
	return (
		<div>
			<Song tempo={ 90 }>
				<Sequencer resolution={16} bars={1}></Sequencer>
			</Song>			
		</div>
	);
};