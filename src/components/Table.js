import RowItem from '../components/RowItem';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function Table(props) {
  const {tableData, setTableData} = props;

  return (
    <div className="Table">
      <div className="TableHeader">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      <div className="TableContent">
        {
          tableData.map(row => {
            return (
              <RowItem key={nanoid()} date={row.date} distance={row.distance}/>
            );
         })
        }
      </div>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func,
};

Table.defaultProps = {
  tableData: [],
};

export default Table;
