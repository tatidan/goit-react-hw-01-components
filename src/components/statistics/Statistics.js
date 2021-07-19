// title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.

import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {stats.map(data => (
          <li class="item" key={data.id}>
            <span class="label">{data.label}</span>
            <span class="percentage">{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Statistics;
