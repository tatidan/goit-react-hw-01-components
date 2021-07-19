import React from 'react';
import TransactionItem from './transactionItem/TransactionItem';

const Transactions = ({ transactions }) => {
  return (
    <table
      class="transaction-history"
      style={{ border: '1px solid black', width: 300, marginLeft: 70 }}
    >
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
