import React, {useEffect, useState} from 'react';
function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const fetchData = async () => {
        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/transactions/patient", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((body) => {
                setTransactions(body.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">Transactions</h4>

                <div className="card">
                    <div className="table-responsive text-nowrap">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Reference ID</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                            {
                                transactions.map((transaction) => {
                                    return <tr>
                                        <td>
                                            <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{transaction.referenceId}</strong>
                                        </td>
                                        <td>{transaction.amount}</td>
                                        <td><span className="badge bg-label-success me-1">{transaction.status}</span></td>
                                        <td>
                                            {new Date(transaction.createdAt).toLocaleDateString()}
                                        </td>
                                        <td>
                                            {new Date(transaction.createdAt).toLocaleTimeString()}
                                        </td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transactions;