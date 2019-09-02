import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

import styles from './Reader.module.css';

export default class Reader extends Component {
  static defaultProps = {
    index: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
    index: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      pubs: this.props.items,
      index: 0,
    };
  }

  handleControlsClick = (target, step) => {
    this.setState(prevState => ({
      index: prevState.index + step,
    }));
  };

  render() {
    const { pubs, index } = this.state;
    const pub = pubs[index];

    return (
      <div className={styles.reader}>
        <Publication publication={pub} />
        <Counter index={index + 1} total={pubs.length} />
        <Controls
          handleClick={this.handleControlsClick}
          index={index + 1}
          total={pubs.length}
        />
      </div>
    );
  }
}
