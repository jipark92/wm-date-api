import React from 'react'

export default function DateDisplay({ dates }) {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const newDateFormat = new Date(dates.date)
    let day = newDateFormat.getDay()
    let month = months[newDateFormat.getMonth()]
    let year = newDateFormat.getFullYear()

    return (
        <>
            <ul style={{ listStyleType: 'none' }}>
                <li>Day: {day} </li>
                <li>Month: {month}</li>
                <li>Year: {year}</li>
            </ul>
        </>
    )
}
