'use strict';
import store from './store';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container_Root from './containers/Container_Root';
import SampleApp from './components/SampleApp';

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path="/" component={ Container_Root }>
				<IndexRoute component={ SampleApp } />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('main')
);