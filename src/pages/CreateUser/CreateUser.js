import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const CreateUser = () => {
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');

    const handleGender = event => {
        setGender(event.target.value)
    };

    const handleStatus = event => {
        setStatus(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email, gender, status)

        const user = {
            name,
            email,
            gender,
            status
        }

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('User Created Successfully...')
                    form.reset();
                }
                else {
                    toast.error(data.message)
                }

            })

    }
    return (
        <div className='w-96 mx-auto mt-10'>
            <Link to='/'> see all user</Link>
            <form onSubmit={handleCreateUser} className='grid grid-cols-1 gap-2 mt-4 py-5'>
                <input type="text" name='name' className="input input-bordered w-full max-w-md" placeholder='Your Name' />
                <input type="name" name='email' className="input input-bordered w-full max-w-md" placeholder='Your Email' />
                <div onChange={handleGender} className='flex gap-8 my-4'>
                    <p className='text-gray-500'>Gender</p>
                    <div className='flex '>
                        <input type="radio" value='Male' name="radio" className="radio radio-accent mr-2" />Male
                    </div>
                    <div className='flex'>
                        <input type="radio" value='Female' name="radio" className="radio radio-accent mr-2" />Female
                    </div>

                </div>
                <div onChange={handleStatus} className='flex gap-8 my-4'>
                    <p className='text-gray-500'>Status</p>
                    <div className='flex '>
                        <input type="radio" value='Active' name="gender" className="radio radio-accent mr-2" />Active
                    </div>
                    <div className='flex'>
                        <input type="radio" value='Inavtive' name="gender" className="radio radio-accent mr-2" />Inactive
                    </div>

                </div>
                <input type="submit" value="save" className="btn btn-success w-full max-w-md" />

            </form  >
        </div>
    );
};

export default CreateUser;