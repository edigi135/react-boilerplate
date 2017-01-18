'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, BrowserHistory } from 'react-router';
import Store from './store';

import Root from './components/Root';
import SampleApp from './components/SampleApp';

ReactDOM.render(
	<Provider store={ Store }>
		<Router history={ BrowserHistory }>
			<Route path="/" component={ Root } />
			<IndexRoute component={ SampleApp } />
		</Router>
	</Provider>
	, document.getElementById('main')
);