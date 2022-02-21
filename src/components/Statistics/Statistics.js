import React from 'react';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRandomHexColor';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>

    <ul className={s.statList}>
      {stats.map(stat => (
        <li
          className={s.item}
          style={{ backgroundColor: getRandomHexColor() }}
          key={stat.id}
        >
          <span className={s.label}>{stat.label}</span>
          <span className={s.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
