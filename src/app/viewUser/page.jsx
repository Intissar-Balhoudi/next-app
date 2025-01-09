"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
const ViewUser = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await axios.get('/api/User');
        setUsers(res.data.user);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    const trash = async (id) => {
        if (confirm("do you want to delete this item?")) {
            await axios.delete(`/api/User?id=${id}`)
                .then(() => {
                    fetchUsers()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    return (
        <>
            <div className="container my-5">
                <table className="table table-striped table-hover table-success">
                    <thead className="table-dark">
                        <tr>
                            <th>S.No</th>
                            <th>Username</th>
                            <th>Email ID</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.user_name}</td>
                                    <td>{user.user_email}</td>
                                    <td>{user.user_mobile}</td>
                                    <td>
                                        <button onClick={() => trash(user._id)} className='btn btn-danger mx-2'><i class="fa-solid fa-trash"></i></button>
                                        <Link href={`/editUser/${user._id}`} className="btn btn-warning"><i class="fa-solid fa-pen"></i></Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No Users Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ViewUser;