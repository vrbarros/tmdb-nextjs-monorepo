import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../components';

function HomePage(props) {
  return (
    <div>
      <div>
        <img width={200} src="/movies/static/nextjs.png" />
      </div>
      <Header />
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
