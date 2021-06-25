import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectLoaderIsVisible,
  selectLoaderText,
} from '../../redux/loader/loader.selectors';

import CircleLoader from 'react-spinners/CircleLoader';

const Loader = ({ isLoaderVisible, text }) => {
  let [loading, setLoading] = useState(true);

  return (
    <div className={`${!isLoaderVisible && 'hidden'} loader-container`}>
      <CircleLoader color='#fff' loading={loading} size={150} />
      <p className='marginTop20 colorWhite'>{text ? `${text}...` : ''}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoaderVisible: selectLoaderIsVisible,
  text: selectLoaderText,
});

export default connect(mapStateToProps)(Loader);
