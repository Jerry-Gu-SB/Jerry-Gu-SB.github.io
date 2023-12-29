import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Comment:
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </label>
            <br />
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;
