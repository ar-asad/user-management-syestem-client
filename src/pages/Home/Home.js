import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteuserModal from '../DeleteuserModal/DeleteuserModal';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    const [deleteUser, setDeleteUser] = useState(null);
    // const [isLoading, setLoading] = useState(true)


    // useEffect(() => {
    //     // setLoading(true)
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    //     // setLoading(false)
    // }, [])

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/users', {
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.error(error);
            }

        }
    })

    const handleUserDelete = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success(`User ${user.name} deleted successfully`)
                    refetch()
                }

            })

    }

    return (
        <div className="overflow-x-auto">
            <div className='my-4 shadow-md inline-block ms-4 p-2 text-violet-700 font-semibold'>
                <Link to='/createUser'> New User</Link>
            </div>

            <table className="table w-full">
                {/* head */}
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.status}</td>
                            <td>
                                <button className='mr-2 btn btn-xs btn-primary'>update</button>
                                <label onClick={() => setDeleteUser(user)} htmlFor="userDelete-modal" className="btn btn-xs btn-danger">Delete</label>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            {
                deleteUser && <DeleteuserModal
                    setDeleteUser={setDeleteUser}
                    handleUserDelete={handleUserDelete}
                    modalData={deleteUser}
                >
                </DeleteuserModal>
            }
        </div>
    );
};

export default Home;