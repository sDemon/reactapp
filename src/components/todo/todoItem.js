import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  return (
    <li ><input type="checkbox" defaultChecked={props.iscomplete} />{props.name}</li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  iscomplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}
