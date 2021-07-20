import React from 'react';
import Profile from './socialProfile/Profile';
import FriendList from './friendList/FriendList';
import Statistics from './statistics/Statistics';
import Transactions from './transactionHistory/Transactions';
import user from '../data/user.json';
import friends from '../data/friends.json';
import stats from '../data/stats.json';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={stats} />
      <Transactions transactions={transactions} />
    </>
  );
};

export default App;
