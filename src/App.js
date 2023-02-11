import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import RowItem from './components/RowItem';
import Message from './components/Message';

function App() {
  const [data, setData] = useState([]);
  const messages = {
    wrongDate: 'Неверный формат даты! Введите дату в формате ДД.ММ.ГГГГ',
    wrongDistance: 'Неверный формат расстояния! Введите число от 1 до 999',
    successAdd: 'Данные успешно добавлены!',
    successDelete: 'Данные успешно удалены!',
    successEdit: 'Данные успешно изменены!',
  }
  const updateDataFromChild = (data) => setData(data);
    
  const handleSubmit = (evt) => {
    evt.preventDefault();
    validateForm(evt.target);
    clearForm(evt.target);
  }

  const validateForm = (form) => {
    if (validateDate(form.date.value) && validateDistance(form.distance.value)) {
      applyFormData(form);
    }
  }

  const validateDate = (date) => {
    const dateRegExp = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

    if (date.match(dateRegExp)) {
      return true;
    } else {
      console.warn(messages.wrongDate);
      return false;
    }
  }
  
  const validateDistance = (distance) => {
    if (Number(distance) > 0 && Number(distance) < 999) {
      return true;
    } else {
      console.warn(messages.wrongDistance);
      return false;
    }
  }

  const applyFormData = (form) => {
    // TODO check if date already exists
    const foundData = data.filter(instance => instance.date === form.date.value);
    if (foundData.length === 1) {
      updateData(form.distance.value, data.indexOf(...foundData));
    } else {
      addData(form);
      sortData();
    }
  }

  const addData = (form) => {
    // make new data
    const newData = {
      date: form.date.value,
      distance: Number(form.distance.value),
    };

    // save new data
    setData((prevData) => {
      return [...prevData, newData];
    })
  }

  const sortData = () => {
    setData((prevData) => {
      prevData.sort((a, b) => {
        const transformDate = (date) => {
          const [day, month, year] = date.split('.');
          return `${month}/${day}/${year}`;
        }
        return Date.parse(transformDate(b.date)) - Date.parse(transformDate(a.date));
      });
      return [...prevData];
    })
  }

  const updateData = (value, index) => {
    setData(prevData => {
      prevData[index].distance += Number(value);
      return [...prevData];
    })
  }

  const removeData = () => {

  }

  const clearForm = (form) => {
    form.date.value = '';
    form.distance.value = '';
  }

  const showMessage = (message) => {
    console.warn(message);
  }

  return (
    <div className="App">
      <form className="Form" onSubmit={handleSubmit}>
        <div className="formColumn">
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input type="text"
            name="date"
            placeholder="Дата"
            defaultValue="">
          </input>
        </div>
        <div className="formColumn">
          <label htmlFor="distance">Пройдено км</label>
          <input type="text"
            name="distance"
            placeholder="Пройдено км"
            defaultValue=""
          ></input>
        </div>
        <button type="submit">OK</button>
      </form>
      
      <div className="Table">
        <div className="TableHeader">
          <span>Дата (ДД.ММ.ГГ)</span>
          <span>Пройдено км</span>
          <span>Действия</span>
        </div>
        <div className="TableContent">
          {
            data.map(row => {
              const id = nanoid();
              return (
                <RowItem
                  key={id}
                  id={id}
                  date={row.date}
                  distance={row.distance}
                  updateData={updateDataFromChild}
                />
              );
           })
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
