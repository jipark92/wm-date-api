// import './App.css';
import { fetchDateAPI } from './services/date.api'
import { useState } from 'react'
import DateButton from './components/DateButton'
import DateDisplay from './components/DateDisplay';

function App() {

  const [dates, setDates] = useState([])



  return (
    <div className="App">
      <h1>Date API</h1>
      {/* date button */}
      <DateButton
        dates={dates}
        setDates={setDates}
        fetchDateAPI={fetchDateAPI}
      />
      {/* display date */}
      <DateDisplay />
    </div>
  );
}

export default App;
