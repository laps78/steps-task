function Form(props) {
  const {data, setFormData} = props;
  const [date, distance] = data;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('catch event: ', evt);
    clearForm();
  }
  const clearForm = () => {
    setFormData({
      date: null,
      distance: null,
    })
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