import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState([]);
  const updateFormData = (data) => setFormData(data);
  
  const [tableData, setTableData] = useState([]);
  const updateTableData = (data) => setTableData(data);

  //TODO remove logs!
  console.log('[App.js] formData', formData);
  console.log('[App.js] tableData', tableData);

  return (
    <div className="App">
      <Form data={formData} setData={updateFormData} />
      <Table data={tableData} setData={updateTableData} />
    </div>
  );
}

export default App;
