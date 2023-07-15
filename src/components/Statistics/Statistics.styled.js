import styled from 'styled-components';
export const StatisticsSection = styled.section`
width: 100%;
 background-color: rgb(185, 185, 184);
 text-align: center;
 padding:10px 0;
`
export const StatisticsDiv = styled.div`
 margin: 0 auto;
    width: 100%;
    max-width: 400px;
    background-color: rgb(255, 255, 255);
`
export const StatisticsTitle = styled.h2`
 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
` 
export const StatisticsList = styled.ul`
display: flex;
justify-content: space-between; 
`
export const StatisticsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
color:#F0F8FF;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
&:nth-child(odd){
     background-color: #72A0C1;
};
&:nth-child(1){
     background-color: aqua;
};
&:nth-child(2n+2){
     background-color: #F19CBB;
};
&:nth-child(3n+3){
     background-color: #BFFF00;
};
`
export const Label = styled.span`
font-weight: bold;
font-size: 16px;`
export const Percentage = styled.span`
font-weight: normal;
font-size: 18px;`