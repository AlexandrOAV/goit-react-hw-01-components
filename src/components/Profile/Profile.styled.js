import styled from 'styled-components';

export const ProfileDiv = styled.div`
  max-width:250px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 0 auto;
  margin-bottom:10px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #ffffff;
  overflow: hidden;
`;
export const ProfileDiscription = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  color:  #000000;
 
`;
export const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border-radius: 50%;
  border: 4px solid #848482;
  `;
export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  `;
export const ProfileTag = styled.p`
 font-size: 18px;
  `;
export const ProfileLocation = styled.p`
 font-size: 16px;
 color: #ff6600;
`
export const Stats = styled.ul`
display: flex;
justify-content: space-around;
text-align: center;
width: 100%;
margin-top: 5px;
font-size:18px;
background-color:#B2BEB5;
border: 1px solid #ccc;
li{
 width: 100%;
 display: flex;
   flex-direction: column;
   gap: 3px;
   /* padding: 2px 0; */
   border-right: 1px solid #ccc;
}
`
export const Label = styled.span`
font-size:16px;
color:#0048BA;
`
export const Quantity = styled.span`
font-size:12px;
font-weight: 700;
color:#000000;
`
