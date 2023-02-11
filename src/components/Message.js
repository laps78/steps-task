import PropTypes from 'prop-types';

function Message(props) {
  const { message, color } = props;
  return (
    <div style={`backgoundColor=${color}`}>{ message }</div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

Message.defaultProps = {
  message: '',
  color: '#ffffff',
}

export default Message;