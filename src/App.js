import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState([]);
  const [tableData, setTableData] = useState([]);

  return (
    <div className="App">
      <Form data={formData} setData={setFormData} />
      <Table data={tableData} setData={setTableData} />
    </div>
  );
}

export default App;
