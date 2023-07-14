import PropTypes from 'prop-types';
const FriendList = ({ friends }) => {
    
    return (
        <section className="friends-list">
            {friends.map(({ id, avatar, name, isOnline})=>{
                return (<li key={id} className="item">
                    {isOnline?(<span className="status on-line">ONLINE</span>):(<span className="status off-line">OFFLINE</span>)}
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
            </li>)
})}
        </section>
    );
};
// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ),
// };
// FriendList.PropTypes = {
//     friends: PropTypes.arrayOf(
//         PropTypes.exact({
//             id: PropTypes.number.isRequired,
//             avatar: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             isOnline: PropTypes.bool.isRequired,
//         })
//     ),
// };
export default FriendList;