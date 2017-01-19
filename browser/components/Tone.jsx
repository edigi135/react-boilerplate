'use strict';

import React from 'react';
import Tone from 'tone';
import { playNote } from '../redux/Tone_reducer';

export default () => {
	// const synth = new Tone.Synth().toMaster();

	return (
		<div>
			<button onClick={ playNote }> play C </button>
		</div>
	);
};