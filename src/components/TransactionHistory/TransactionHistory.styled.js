import styled from 'styled-components';
export const TableSection = styled.section`
 width: 100%;
 background-color: #ffffff;
 text-align: center;
 padding:10px 0;
 margin-top: 5px;`
export const Table = styled.table`
 margin: 0 auto;
 width: 100%;
 box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
 max-width:400px;`
export const HeadTable = styled.thead`
 background-color: #0048BA;
 th{
 border: 1px solid #676767;
 padding: 3px;
 }
`
export const Tbody = styled.tbody`
text-align: center;
font-size: 16px;
`
export const TbodyTr = styled.tr`
&:nth-child(even){
    background-color:#EFDECD;
}
&:nth-child(odd){
    background-color:#C0E8D5;}
padding: 10px;
height: 35px;
font-weight: 600;`