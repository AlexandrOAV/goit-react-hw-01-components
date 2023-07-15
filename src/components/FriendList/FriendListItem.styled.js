import styled from 'styled-components';
export const FriendsLi = styled.li` 
display: flex;
gap:20px;
justify-content: start;
align-items: center;
width:100%;
max-width: 260px;
padding: 5px 10px;
border: 2px solid #ffffff;
box-shadow: 0px 0px 10px 3px rgba(0,21,255,1);
&:hover{
    box-shadow: 0px 0px 10px 3px rgba(0,0,0,1);
}
`
 export const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #ffffff;
  `;

export const Status = styled.span` 
border-radius: 50%;
width: 10px;
height: 10px;
background-color: ${({ status }) => status ? '#00FF00' : '#FF0000'};
`
export const Name = styled.p`
font-size: 24px;
  font-weight: bold;
`