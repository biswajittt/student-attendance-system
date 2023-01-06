import React from 'react'

export default function ViewData(props) {
    function formatTime(timeString) {
        const [hourString, minute] = timeString.split(":");
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
    }
    return (
        <>
            <tr>
                <th>{props.name}</th>
                <td>{props.roll}</td>
                <td>{formatTime(props.checkin)}</td>
                <td>{formatTime(props.checkout)}</td>
            </tr>
        </>
    )
}
