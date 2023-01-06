import React, { useState } from 'react'

export default function AddData(props) {

    const [data, setData] = useState({
        name: "",
        roll: "",
        checkin: "",
        checkout: ""
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function containsNumber(str) {
        return /\d/.test(str);
    }
    const addEvent = (event) => {
        event.preventDefault();
        if (!data.name || !data.roll || !data.checkin || !data.checkout) {
            alert("Please fill all the fields:)")
        }
        else if (containsNumber(data.name)) {
            alert("Name can only be text:)")
        }
        else if (isNaN(data.roll)) {
            alert("Please enter a valid roll number:)")
        }
        else {
            props.passData(data);
            setData({
                name: "",
                roll: "",
                checkin: "",
                checkout: ""
            });
        }

    }

    return (
        <>
            <div className="left container">
                <h3 className='text-center'>Enter Student Details</h3>
                <form >
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingName" name="name" value={data.name} onChange={inputEvent} placeholder="name@example.com" />
                        <label htmlFor="floatingName">Student Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="num" className="form-control" id="floatingRollNumber" name="roll" value={data.roll} onChange={inputEvent} placeholder="Roll Number" />
                        <label htmlFor="floatingRollNumber">Roll Number</label>
                    </div>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="time" className="form-control" id="floatingInputGrid" name="checkin" value={data.checkin} onChange={inputEvent} placeholder="name@example.com" />
                                <label htmlFor="floatingInputGrid">Checkin Time</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="time" className="form-control" id="floatingInputGrid" name="checkout" value={data.checkout} onChange={inputEvent} placeholder="name@example.com" />
                                <label htmlFor="floatingInputGrid">Checkout Time</label>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn custome-btn" onClick={addEvent} type="submit">Add</button>
                    </div>
                </form>

            </div>
        </>
    )
}
