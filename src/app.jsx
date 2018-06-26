import React from 'react';
import { hot } from 'react-hot-loader';
import { RootContext } from 'utils/contexts';

import WaffleTrigger from 'components/trigger';
import DomExplorer from 'components/dom-explorer';

class WaffleApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      waffling: false,
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

  render() {
    return (
      <>
        <WaffleTrigger onClick={this.onWaffleClick}>{this.state.waffling ? 'Unwaffle' : 'Waffle!'}</WaffleTrigger>
        {this.state.waffling && (
          <RootContext.Consumer>
            {root => <DomExplorer root={root} onCreate={this.onWaffleClick} />}
          </RootContext.Consumer>
        )}
      </>
    );
  }
}

export default hot(module)(WaffleApp);
