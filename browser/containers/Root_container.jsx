'use strict';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


import Root from '../components/Root';

const mapStateToProps = state => {
  return state = {
    message: 'Some message'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    myCoolFunction: () => 'Hello'
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
