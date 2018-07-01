import React from 'react';
import PropTypes from 'prop-types';
import css from 'classnames';

import s from './styles.scss';

import chat from './icons/chat.svg';
import waffle from './icons/waffle.svg';
import settings from './icons/settings.svg';
import history from './icons/history.svg';

const Icon = ({ icon, className, ...props }) => (
  <svg {...props} className={css(s.icon, className)} viewBox={icon.viewBox}>
    <use xlinkHref={`#${icon.id}`} />
  </svg>
);

Icon.icons = {
  chat,
  waffle,
  settings,
  history,
};

Icon.defaultProps = {
  className: null,
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(Icon.icons)).isRequired,
};

export default Icon;
