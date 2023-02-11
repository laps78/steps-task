import {PropTypes} from 'prop-types';

function RowItem(props) {
  const {id, date, distance, deleteData} = props;
  const handleDeleteClick = (id) => deleteData(id);
  
  return (
    <div className="TableRow">
      <span className="RowItem RowItem-date">{date}</span>
      <span className="RowItem RowItem-distance">{distance}</span>
      <div className="RowItem">
        <span className="tableIcon">✎</span>
        <span className="tableIcon" onClick={() => handleDeleteClick(id)}>✘</span>
      </div>
    </div>
  );
}
RowItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  deleteData: PropTypes.func,
}

RowItem.defaultProps = {
  id: null,
  date: null,
  distance: null,
}

export default RowItem;