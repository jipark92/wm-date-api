import React from 'react'

export default function DateButton({ getDate, setGetDate, fetchDateAPI }) {
    return (
        <>
            <button
                onClick={() => {
                    fetchDateAPI(setGetDate)
                    console.log(getDate)
                }}>DISPLAY DATE</button>
        </>)
}
