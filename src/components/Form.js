import { nanoid } from "nanoid";

function Form(props) {
  const { data, setData } = props;
  const { date, distance } = data;
  console.log('[Form.JS] data incoming', data);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log('[Form.JS] catch event: ', evt);
    console.log('[Form.JS] data до handleSubmit: ', data);
    data.date = evt.target.date.value;
    data.distance = evt.target.distance.value;
    

    applyData(data);
    console.log('[Form.JS] data после applyData: ', data);
    // clear form
    clearForm(evt.target);
  }

  const applyData = (data) => {
    setData(prevData => ([
      ...prevData,
      {
        id: nanoid(),
        date: date,
        distance: distance,
      }
    ]));
  }

  const clearForm = (form) => {
    form.date.value = '';
    form.distance.value = '';
  }
  
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="formColumn">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input type="text"
          name="date"
          placeholder="Дата"
          defaultValue={date}>
        </input>
      </div>
      <div className="formColumn">
        <label htmlFor="distance">Пройдено км</label>
        <input type="text"
          name="distance"
          placeholder="Пройдено км"
          defaultValue={distance}
        ></input>
      </div>
      <button type="submit">OK</button>
    </form>
  );
}

export default Form;