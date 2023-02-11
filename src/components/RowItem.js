import {PropTypes} from 'prop-types';

function RowItem(props) {
  const {date, distance} = props;
  return (
    <div className="TableRow">
      <span className="RowItem RowItem-date">{date}</span>
      <span className="RowItem RowItem-distance">{distance}</span>
      <div className="RowItem">
        <span className="tableIcon">✎</span>
        <span className="tableIcon">✘</span>
      </div>
    </div>
  );
}
RowItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
}

RowItem.defaultProps = {
  id: null,
  date: null,
  distance: null,
}

export default RowItem;