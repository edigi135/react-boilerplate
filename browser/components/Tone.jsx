'use strict';

import React from 'react';
import Tone from 'tone';

export default () => {
	const synth = new Tone.Synth().toMaster();
	
	function handleClick() {
		synth.triggerAttackRelease("C4", "8n");
	}
	function loopC() {
		return new Tone.Loop(function(time){
    synth.triggerAttackRelease("C4", "8n", time);
}, "4n");
	}
	

	return (
		<div>
			<button onClick={ handleClick }> Play C </button>
			<button onClick={ loopC }> Loop C </button>
		</div>
	);
};