import Profile from 'components/Profile/Profile';
import user from 'data/user';
import Statistics from 'components/Statistics/Statistics';
import data from 'data/data'
import FriendList from 'components/FriendList/FriendList';
import friends from 'data/friends'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'
import transactions from 'data/transactions.json';

// const { username, tag, location, avatar, stats } = user;
export const App = () => {
  return (
    <div className='container'    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
