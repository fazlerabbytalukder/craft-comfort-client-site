import React, { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
                console.log(data);
            })
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <input type="email" placeholder='Enater Email' onBlur={handleOnBlur} />
                <button type='submit'>Make Admin</button>
            </form>
            {success && (<div className='bg-green-700/60 py-3 rounded text-white flex items-center px-4 mb-4'>
                <p className='mr-3'><BsFillCheckCircleFill /></p>
                <p>Made Admin Successfully</p>
            </div>)}
        </div>
    );
};

export default MakeAdmin;