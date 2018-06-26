import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import finder from '@medv/finder';

import { getElementFromPoint, getCoordsAndBounding } from 'utils/dom';

import Highlight from './highlight';

class DomExplorer extends React.Component {
  static propTypes = {
    root: PropTypes.instanceOf(Element).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      target: null,
      highlight: {
        width: null,
        height: null,
        left: null,
        right: null,
      },
    };
  }

  componentDidMount() {
    document.body.addEventListener('mousemove', this.mouseMoveHandler);
    document.querySelector('#waffle-button').addEventListener('mousemove', this.stopPropagation);
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousemove', this.mouseMoveHandler);
    document.querySelector('#waffle-button').removeEventListener('mousemove', this.stopPropagation);
  }

  onQuaterChange = quater => {
    this.setState({ quater });
  };

  onHighlightClick = () => {
    console.log(finder(this.state.target), this.state.quater);
    // this.props.onCreate();
  };

  setHightlightRef = node => {
    this.highlightElement = node;
  };

  stopPropagation = e => {
    e.stopPropagation();
    return false;
  };

  mouseMoveHandler = e => {
    const target = getElementFromPoint(e.clientX, e.clientY, this.highlightElement);
    if (target.isSameNode(this.state.target)) return false;

    this.setState({
      target,
      highlight: getCoordsAndBounding(target),
    });

    return true;
  };

  render() {
    return ReactDOM.createPortal(
      <Highlight
        {...this.state.highlight}
        refSetter={this.setHightlightRef}
        onQuaterChange={this.onQuaterChange}
        onClick={this.onHighlightClick}
      />,
      this.props.root,
    );
  }
}

export default DomExplorer;
