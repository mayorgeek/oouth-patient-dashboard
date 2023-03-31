import React, {useEffect, useState} from 'react';

function Messages() {

    const [messages, setMessages] = useState([]);
    const fetchData = async () => {
        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/messages/patient", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((body) => {
                setMessages(body.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">Messages</h4>

                <div className="row">
                    {
                        messages.map((message) => {
                            return <div className="col-12 col-lg-12 mb-3">
                                <div className="bg-info card">
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p className="text-white">
                                                {message.body}
                                            </p>
                                            <footer className="blockquote-footer text-white">
                                                {new Date(message.createdAt).toLocaleDateString()} {new Date(message.createdAt).toLocaleTimeString()}
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Messages;