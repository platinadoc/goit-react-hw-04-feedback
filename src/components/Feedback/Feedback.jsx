import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(nameEl => {
        return (
          <li key={nameEl} className={s.item}>
            <button type="button" className={s.btn} name={nameEl} onClick={onLeaveFeedback}>
              {nameEl}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
