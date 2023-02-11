import {PropTypes} from 'prop-types';

function RowItem(props) {
  const {date, distance, updateData} = props;
  const handleDeleteClick = (evt) => {
    console.log('delete!');
  }
  return (
    <div className="TableRow">
      <span className="RowItem RowItem-date">{date}</span>
      <span className="RowItem RowItem-distance">{distance}</span>
      <div className="RowItem">
        <span className="tableIcon">✎</span>
        <span className="tableIcon" onClick={handleDeleteClick}>✘</span>
      </div>
    </div>
  );
}
RowItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  updateData: PropTypes.func,
}

RowItem.defaultProps = {
  id: null,
  date: null,
  distance: null,
}

export default RowItem;