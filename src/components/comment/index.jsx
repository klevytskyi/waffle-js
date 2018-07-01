import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getCoordsAndBounding } from 'utils/dom';

import s from './styles.scss';

const CommentBox = ({ className, children, comment, path, corner, ...props }) => {
  const { width, height, left, top } = getCoordsAndBounding(document.querySelector(path));
  const pos = corner.split('-');
  const style = {
    top: pos[0] === 'top' ? top : top + height,
    left: pos[1] === 'left' ? left : left + width,
  };
  return (
    <div {...props} className={cx(s.comment, className)} style={style}>
      {path}
      <div className={s.commentList}>Comments</div>
      <textarea />
    </div>
  );
};

CommentBox.defaultProps = {
  className: null,
  children: null,
};

CommentBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CommentBox;
