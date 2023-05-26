import PropTypes from 'prop-types';
import { Title, ButtonBox, Button } from './FeedbackOptions.styled';

const OnFeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Title>Please leave feedback</Title>
      <ButtonBox>
        {options.map(option => {
          return (
            <Button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
            >
              {option}
            </Button>
          );
        })}
      </ButtonBox>
    </>
  );
};
OnFeedbackOptions.propTypes = {
  options: PropTypes.array,
};
export { OnFeedbackOptions };
