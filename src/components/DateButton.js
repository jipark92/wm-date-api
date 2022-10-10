import React from 'react'

export default function DateButton({ dates, setDates, fetchDateAPI }) {
    return (
        <>
            <button
                onClick={() => {
                    fetchDateAPI(setDates)
                    console.log(dates.date)
                }}>DISPLAY DATE</button>
        </>)
}
