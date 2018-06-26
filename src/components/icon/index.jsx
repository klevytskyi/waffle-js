import React from 'react';
import PropTypes from 'prop-types';
import css from 'classnames';

import s from './styles.scss';

import chat from './icons/chat.svg';
import waffle from './icons/waffle.svg';

const Icon = ({ icon, className, ...props }) => (
  <svg {...props} className={css(s.icon, className)} viewBox={icon.viewBox}>
    <use xlinkHref={`#${icon.id}`} />
  </svg>
);

Icon.icons = {
  chat,
  waffle,
};

Icon.defaultProps = {
  className: null,
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(Icon.icons)).isRequired,
};

export default Icon;
