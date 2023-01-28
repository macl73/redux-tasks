import './App.css';
import React from 'react';
import CreateRecord from './components/CreateRecord.jsx';
import RecordList from './components/RecordList.jsx';
import NameFilter from './components/NameFilter.jsx';

function App() {
  return (
    <div className='container'>
      <CreateRecord />
      <NameFilter />
      <RecordList />
    </div>
  );
};

export default App;
