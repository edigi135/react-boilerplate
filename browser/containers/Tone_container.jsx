'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Tone from '../components/Tone';
import { playNote, stopNote } from '../redux/Tone_reducer';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
	playNote: data => {
		dispatch(playNote(data));
	},
	stopNote: data => {
		dispatch(stopNote(data));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Tone);