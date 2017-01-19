'use strict';

import React from 'react';
import Navbar from './Navbar';
import nexus from 'nexusui';
// import Footer from './Footer';

export default ({ children }) => (
  <div id="main">
    <Navbar />
    { children }
  {/*<Footer />*/}
  </div>
);