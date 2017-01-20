'use strict';

import React from 'react';
import Navbar from './Navbar';

export default ({ children }) => (
  <div id="main">
    <Navbar />
    { children }
  </div>
);