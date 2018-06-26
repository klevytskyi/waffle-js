import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from 'components/icon';

import s from './styles.scss';

const WaffleTrigger = ({ className, children, ...props }) => (
  <button {...props} className={cx(s.button, className)} id="waffle-button">
    <div className={s.buttonContent}>
      <Icon icon={Icon.icons.waffle} className={s.buttonIcon} />
      <div className={s.buttonText}>{children}</div>
    </div>
  </button>
);

WaffleTrigger.defaultProps = {
  className: null,
  children: null,
};

WaffleTrigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default WaffleTrigger;
