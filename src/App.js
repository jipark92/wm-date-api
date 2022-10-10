import { fetchDateAPI } from './services/date.api'
import { useState } from 'react'
import DateButton from './components/DateButton'
import DateDisplay from './components/DateDisplay';

function App() {

  const [dates, setDates] = useState([])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold underline'>Date API</h1>

      <DateButton
        setDates={setDates}
        fetchDateAPI={fetchDateAPI}
      />

      {!dates ? <DateDisplay /> : <DateDisplay dates={dates} />}
    </div>
  );
}

export default App;
