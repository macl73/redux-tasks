import './App.css';
import React from 'react';
import CreateRecord from './components/CreateRecord.jsx';
import RecordList from './components/RecordList.jsx';

function App() {
  return (
    <div className='container'>
      <CreateRecord />
      <RecordList />
    </div>
  );
};

export default App;
