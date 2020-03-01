import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import Upload from './Upload';
import Table from './Table';

export default function App() {
  const [content, setContent] = useState(
    `Jim Smith,123 Any Street,Boston,US,02134
Jane Lee,248 Another St.,Boston,US,02130`
  );
  const [delimiter, setDelimiter] = useState(',');
  const [lines, setLines] = useState('2');
  return (
    <div className="App">
      <h1>Table</h1>
      <Upload setContent={setContent} />
      <br />
      <br />
      <input
        type="text"
        value={delimiter}
        onChange={e => setDelimiter(e.target.value)}
        placeholder="Delimiter"
      />
      <input
        type="text"
        value={lines}
        onChange={e => setLines(e.target.value)}
      />
      <Table content={content} delimiter={delimiter} lines={lines} />
      <ToastContainer />
    </div>
  );
}
