import { Container } from 'components/App.styled';
import PropTypes from 'prop-types';
import { HeadTable, Table, TableSection, Tbody, TbodyTr } from './TransactionHistory.styled';
const TransactionHistory = ({ items }) => {
  return ( 
  <TableSection>
    <Container>
      <Table>
      <HeadTable>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </HeadTable>
      <Tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TbodyTr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TbodyTr>)
        })}
      </Tbody>
    </Table>
      </Container>
      </TableSection>
   )
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;