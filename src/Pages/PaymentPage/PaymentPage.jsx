import React, {useState} from 'react';

function PaymentPage() {

    const [amount, setAmount] = useState(0);
    const [narration, setNarration] = useState(0);
    const [date, setDate] = useState("");
    const [time,setTime] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                amount: amount,
                narration: narration,
                paymentDate: date,
                paymentTime: time
            }),
        })
            .then((response) => response.json())
            .then((body) => {
                document.getElementById("amount").value = '';
                document.getElementById("narration").value = '';
                document.getElementById("date").value = '';
                document.getElementById("time").value = '';
            });
    };

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">Make a Payment</h4>

                <div className="card mb-4">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="basic-default-amount">Amount</label>
                                <input id="amount" type="number" className="form-control" onChange={event => setAmount(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="basic-default-narration">Narration</label>
                                <input id="narration" type="text" className="form-control" onChange={event => setNarration(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="basic-default-date">Payment Date</label>
                                <input id="date" type="date" className="form-control" onChange={event => setDate(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="basic-default-time">Payment Time</label>
                                <input id="time" type="time" className="form-control" onChange={event => setTime(event.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-primary">Continue to Pay</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;