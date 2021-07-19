// В зависимости от пропа isOnline, должен меняться цвет фона span.status.
//Это можно сделать через разный CSS - класс или Styled Components.

import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ friend }) => {
  return (
    <li className="item" style={{ listStyle: 'none', padding: 15 }}>
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
