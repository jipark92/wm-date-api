import React from 'react'

export default function DateButton({ dates, setDates, fetchDateAPI }) {
    return (
        <div>
            <button
                className='border border-cyan-400 rounded-3xl bg-cyan-400	text-white font-bold px-2 py-2 my-4'
                onClick={() => {
                    fetchDateAPI(setDates)
                    console.log(dates.date)
                }}>DISPLAY DATE</button>
        </div>)
}
