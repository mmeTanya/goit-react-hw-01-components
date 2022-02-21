import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th className={s.transactionName}>Type</th>
        <th className={s.transactionName}>Amount</th>
        <th className={s.transactionName}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td className={s.transactionValue}>{item.type}</td>
          <td className={s.transactionValue}>{item.amount}</td>
          <td className={s.transactionValue}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
