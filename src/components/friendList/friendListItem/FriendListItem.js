import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.item}>
      <span className={friend.isOnline ? styles.status : styles.disabled} />

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
