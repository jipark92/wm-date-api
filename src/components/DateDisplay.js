import React from 'react'

export default function DateDisplay({ dates }) {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const newDateFormat = new Date(dates.date)
    let day = newDateFormat.getDay()
    let month = newDateFormat.getMonth()
    let year = newDateFormat.getFullYear()

    // Text Day Method : Monday,Tuesday...
    // let day = days[newDateFormat.getDay()]

    // Text Month Method: January,Febuary...
    // let month = months[newDateFormat.getMonth()]

    return (
        <>
            <ul className='flex flex-col justify-start border border-black shadow-xl rounded-xl pr-32 py-3 pl-5 font-bold'>
                <li>Day: {!day ? null : day} </li>
                <li>Month: {!month ? null : month}</li>
                <li>Year: {!year ? null : year}</li>
            </ul>
        </>
    )
}
