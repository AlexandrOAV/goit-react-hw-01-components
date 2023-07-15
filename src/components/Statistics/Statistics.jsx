import { Container } from 'components/App.styled';
import PropTypes from 'prop-types'
import {
  Label,
  Percentage,
  StatisticsDiv,
  StatisticsItem,
  StatisticsList,
  StatisticsSection,
  StatisticsTitle
} from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    < StatisticsSection>
      <Container>
        <StatisticsDiv>
          {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({id, label, percentage}) => {
          return (
            <StatisticsItem key={id} className="item">
              <Label >{label}</Label>
              <Percentage> {percentage}%</Percentage>
            </StatisticsItem>
          )
        })}
      </StatisticsList>
        </StatisticsDiv>
      
       </Container>
    </StatisticsSection>
   
  )
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default Statistics;