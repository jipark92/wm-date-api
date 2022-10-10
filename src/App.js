// import './App.css';
import { fetchDateAPI } from './services/date.api'
import { useState, useEffect } from 'react'
import DateButton from './components/DateButton'
import DateDisplay from './components/DateDisplay';


function App() {

  const [getDate, setGetDate] = useState([])


  return (
    <div className="App">
      <h1>Date API</h1>
      {/* date button */}
      <DateButton
        getDate={getDate}
        setGetDate={setGetDate}
        fetchDateAPI={fetchDateAPI}
      />
      {/* display date */}
      <DateDisplay />
    </div>
  );
}

export default App;
