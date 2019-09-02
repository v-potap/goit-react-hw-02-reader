import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import Reader from './Reader/Reader';

import publications from './publications.json';

class App extends Component {
  static defaultProps = {
    items: [
      {
        id: '',
        title: '',
        text: '',
      },
    ],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {};

  render() {
    return (
      <div className={styles.containerApp}>
        <Reader items={publications} />
      </div>
    );
  }
}

export default App;
