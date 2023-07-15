import { Container } from 'components/App.styled';
import PropTypes from 'prop-types';
import {
  FriendSection,
  FriendsUl,
} from './FriendList.styled';
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
    return (
      <FriendSection>
        <Container>
          <FriendsUl>
         {friends.map(({ id, avatar, name, isOnline }) => (
           <FriendListItem key={id} avatar={avatar} name={name} status={isOnline}  />
    ))}
          </FriendsUl>
          </Container>
      </FriendSection>

    );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;