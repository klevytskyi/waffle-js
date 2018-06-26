import React from 'react';
import PropTypes from 'prop-types';

import { detectQuater } from 'utils/dom';

import s from './styles.scss';

class Highlight extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    refSetter: PropTypes.func.isRequired,
    onQuaterChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      quater: ['top', 'left'],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.quater[0] !== prevState.quater[0] || this.state.quater[1] !== prevState.quater[1]) {
      this.props.onQuaterChange(this.state.quater);
    }
  }

  onMouseMove = e => {
    this.setState({
      quater: detectQuater(e.clientX, e.clientY, this.highlight),
    });
  };

  selfRef = node => {
    this.highlight = node;
    this.props.refSetter(node);
  };

  render() {
    const style = {
      top: `${this.props.top}px`,
      left: `${this.props.left}px`,
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
    };

    const dotStyle = {
      [this.state.quater[0]]: 0,
      [this.state.quater[1]]: 0,
    };

    return (
      <button
        id="waffle-highlight"
        className={s.highlight}
        style={style}
        ref={this.selfRef}
        onMouseMove={this.onMouseMove}
        onClick={this.props.onClick}
      >
        <div className={s.highlightWaffle} style={dotStyle} />
      </button>
    );
  }
}

export default Highlight;
