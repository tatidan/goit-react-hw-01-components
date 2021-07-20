import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile" style={{ margin: 20 }}>
      <div
        className="description"
        style={{
          display: 'flex',
          width: 400,
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
          width="150"
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="name">{name}</h3>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
      </div>

      <ul
        className="stats"
        style={{
          display: 'flex',
          width: 400,
          justifyContent: 'space-between',
          listStyle: 'none',
        }}
      >
        <li>
          <span className="label">
            <b>Followers : </b>
          </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">
            <b>Views : </b>
          </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">
            <b>Likes : </b>
          </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
