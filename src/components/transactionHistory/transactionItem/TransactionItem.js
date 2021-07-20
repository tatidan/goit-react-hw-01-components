import React from 'react';
import PropTypes from 'prop-types';

const TransactionItem = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  data: PropTypes.PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionItem;
