import React from 'react'

export default function DateDisplay({ dates }) {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const newDateFormat = new Date(dates.date)
    // Text Day Method : Monday,Tuesday...
    // let day = days[newDateFormat.getDay()]
    let day = newDateFormat.getDay()
    let month = months[newDateFormat.getMonth()]
    let year = newDateFormat.getFullYear()

    return (
        <>
            <ul style={{ listStyleType: 'none' }}>
                <li>Day: {!day ? null : day} </li>
                <li>Month: {month}</li>
                <li>Year: {!year ? null : year}</li>
            </ul>
        </>
    )
}
