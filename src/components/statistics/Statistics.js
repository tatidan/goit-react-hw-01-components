// title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.

import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      <h2 className="title" style={{ marginLeft: 120 }}>
        Upload stats
      </h2>
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
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
