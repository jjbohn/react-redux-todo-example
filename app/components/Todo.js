import React, { PropTypes } from 'react';

export default function Todo({ onClick, completed, text }) {
  return (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
