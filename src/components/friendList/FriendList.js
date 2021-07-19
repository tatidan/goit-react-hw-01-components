import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';
// import PropTypes from "prop-types";
// import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className="FriendList" style={{ display: 'flex' }}>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

// FriendListItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.array.isRequired
//     })
//   )
// };

export default FriendList;
