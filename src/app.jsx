import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { RootContext } from 'utils/contexts';

import WaffleTrigger from 'components/trigger';
import DomExplorer from 'components/dom-explorer';
import Comment from 'components/comment';

class WaffleApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      waffling: false,
      comments: {},
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.waffling) {
  //   } else {
  //   }
  // }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  onEscPress = e => {
    if (e.keyCode === 27) {
      this.setState({
        waffling: false,
      });
    }
  };

  onWaffleClick = () => {
    this.setState({
      waffling: !this.state.waffling,
    });
  };

  onCreateComment = (path, corner) => {
    const comment = {
      [corner.join('-')]: {},
    };

    this.setState(state => ({
      waffling: false,
      comments: {
        ...state.comments,
        [path]: {
          ...(state.comments.path || {}),
          ...comment,
        },
      },
    }));
  };

  renderComments(root) {
    return Object.keys(this.state.comments).reduce(
      (r, path) => [
        ...r,
        Object.keys(this.state.comments[path]).map(corner =>
          ReactDOM.createPortal(
            <Comment path={path} corner={corner} comment={this.state.comments[path][corner]} />,
            root,
          ),
        ),
      ],
      [],
    );
  }

  render() {
    return (
      <>
        <WaffleTrigger onClick={this.onWaffleClick}>{this.state.waffling ? 'Unwaffle' : 'Waffle!'}</WaffleTrigger>
        {this.state.waffling && (
          <RootContext.Consumer>
            {root => <DomExplorer root={root} onCreateComment={this.onCreateComment} />}
          </RootContext.Consumer>
        )}
        <RootContext.Consumer>{root => this.renderComments(root)}</RootContext.Consumer>
      </>
    );
  }
}

export default hot(module)(WaffleApp);
