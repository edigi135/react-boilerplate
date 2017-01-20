'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Arp from '../components/Arp';
import { playArp, stopArp } from '../redux/Arp_reducer';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
	playArp: data => {
		dispatch(playArp(data));
	},
	stopArp: data => {
		dispatch(stopArp(data));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Arp);