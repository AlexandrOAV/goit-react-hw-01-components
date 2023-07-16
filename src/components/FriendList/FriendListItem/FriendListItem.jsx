import {
    FriendAvatar,
    FriendsLi,
    Name,
    Status,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, status }) => {
    return (
    <FriendsLi>
            <Status status={status?'online':'offline'}></Status>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsLi>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;