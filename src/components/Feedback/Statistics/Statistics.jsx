import { Title, StatsBox, StatList, StatItem } from './Statistics.styled';
const OnStats = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <StatsBox>
        <Title>Statistics</Title>
        <StatList>
          <StatItem>Good: {good} </StatItem>
          <StatItem>Neutral: {neutral}</StatItem>
          <StatItem>Bad: {bad}</StatItem>
          <StatItem>Total: {total}</StatItem>
          <StatItem>
            Positive feedback: {positivePercentage ? positivePercentage : `0`}{' '}
            {`%`}
          </StatItem>
        </StatList>
      </StatsBox>
    </>
  );
};
export { OnStats };
