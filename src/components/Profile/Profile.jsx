import { Container } from 'components/App.styled';
import PropTypes from 'prop-types';
import {
  Label,
  ProfileAvatar,
  ProfileDiscription,
  ProfileDiv,
  ProfileLocation,
  ProfileName,
  ProfileTag,
  Quantity,
  Stats
} from './Profile.styled';
const Profile = ({user}) => {
  const { avatar, username, tag, location, stats } = user;
  return (
  <Container>
  <ProfileDiv >
  <ProfileDiscription>
    <ProfileAvatar
      src={avatar}
      alt="User avatar"
    />
    <ProfileName >{username}</ProfileName>
    <ProfileTag>@{tag}</ProfileTag>
    <ProfileLocation>{location}</ProfileLocation>
  </ProfileDiscription>

  <Stats>
    <li>
      <Label >Followers</Label>
      <Quantity className="quantity">{stats.followers}</Quantity>
    </li>
    <li>
      <Label >Views</Label>
      <Quantity className="quantity">{stats.views}</Quantity>
    </li>
    <li>
      <Label >Likes</Label>
      <Quantity className="quantity">{stats.likes}</Quantity>
    </li>
  </Stats>
</ProfileDiv >
   </Container>)
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    }),
  }),
};
export default Profile;

