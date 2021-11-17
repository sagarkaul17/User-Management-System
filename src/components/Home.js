import axios from 'axios';
import React,{useState, useEffect} from 'react'

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:3002/users");
        setUsers(result.data);
    }

    const deleteUser = async(id) => {
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <h1 className="my-2">Users List</h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-primary mx-1">View</button>
                                <button className="btn btn-outline-primary mx-1">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}
