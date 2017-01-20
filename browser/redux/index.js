'use strict';

import { combineReducers } from 'redux';

// import reducers here --->
import Tone_reducer from './Tone_reducer';
import Arp_reducer from './Arp_reducer';

export default combineReducers({ Tone_reducer, Arp_reducer });