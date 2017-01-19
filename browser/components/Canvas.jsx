'use strict';

import React from 'react';

// require the library 
import score from 'scorejs';
// require the pianoroll module 
import {  build, draw, canvas } from 'scorejs/ext/pianoroll';
// require the player module 
import player from 'scorejs/ext/player';

export default class Canvas extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// create the score 
		const song = score(
			['melody', '4/4', 'c2 d2 e2 (f2 g2) | a2 b2 | c3'],
			['harmony', '4/4', 'Cmaj7 | Dm7 G7 | Cmaj7']
		);

		// play the score: 
		// create an audio context 
		const ac = new AudioContext();
		player.play(ac, player.synth, score.tempo(120, song));

		// show the score in a piano roll 
		// given a canvas...
		const ctx = canvas.getContext('2d');
		draw(ctx, song);
		
		return (
			<div>
				{ canvas }
			</div>
		);
	}
}
