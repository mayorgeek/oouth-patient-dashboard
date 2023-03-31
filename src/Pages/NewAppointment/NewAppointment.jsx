import React, {useEffect, useState} from 'react';

function NewAppointment() {

    const [doctorName, setDoctorName] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();

        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                doctorName: doctorName,
                preferredDate: date,
                preferredTime: time
            }),
        })
            .then((response) => response.json())
            .then((body) => {
                document.getElementById("input-date").value = '';
                document.getElementById("input-time").value = '';
            });
    };

    const [doctors, setDoctors] = useState([]);

    const fetchData = async () => {
        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/doctors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((body) => {
                setDoctors(body.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">Book an Appointment</h4>

                <div className="card mb-4">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="defaultSelect" className="form-label">Preferred Doctor</label>
                                <select id="defaultSelect" className="form-select" onChange={event => setDoctorName(event.target.value)}>
                                    {
                                        doctors.map((doctor) => {
                                            return <option value={doctor.name}>{doctor.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="basic-default-date">Preferred Date</label>
                                <input id="input-date" type="date" className="form-control" onChange={event => setDate(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="basic-default-time">Preferred Time</label>
                                <input id="input-time" type="time" className="form-control" onChange={event => setTime(event.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewAppointment;