'use strict';

import React from 'react';
import Navbar from './Navbar';
// import Footer from './Footer';

export default ({ children }) => (
  <div id="main">
    <Navbar />
    { children }
  {/*<Footer />*/}
  </div>
);