'use strict';
import store from './store';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import RootContainer from './containers/Root_container';
// import SampleApp from './components/SampleApp';
import ToneContainer from './containers/Tone_container';

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path="/" component={ RootContainer }>
				<IndexRoute component={ ToneContainer } />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('main')
);