'use strict';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { myCoolFunction } from '../redux/some_reducer';

import Root from '../components/Root';

const mapStateToProps = () => {
	return {
		message: 'Some message'
	};
};

const mapDispatchToProps = dispatch => {
	return {
		myCoolFunction: credentialsGrabbedFromComponent => {
			dispatch(myCoolFunction(credentialsGrabbedFromComponent));
			browserHistory.push('/');
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);