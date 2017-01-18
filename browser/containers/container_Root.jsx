'use strict';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


import Root from '../components/Root';

const mapStateToProps = () => {
  return {
    message: 'Some message'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    myCoolFunction: console.log('oh god')
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
