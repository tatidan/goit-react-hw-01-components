import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && (
        <h2 className="title" style={{ marginLeft: 120 }}>
          {title}
        </h2>
      )}
      <ul
        className="stat-list"
        style={{ display: 'flex', margin: 20, listStyle: 'none' }}
      >
        {stats.map(data => (
          <li
            className="item"
            key={data.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 10,
              alignItems: 'center',
            }}
          >
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.PropTypes.shape({
    percentage: PropTypes.number,
  }),
};

export default Statistics;
