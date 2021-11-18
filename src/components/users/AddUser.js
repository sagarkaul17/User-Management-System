import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from "react-router-dom";

export default function AddUser() {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const inputChanged = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3002/users",user);
        history.push("/");
    }

    return (
        <div className="container">
            <form onSubmit={e=>onSubmit(e)}>
                <h1 className="my-2">Add a new user</h1>
                <div class="form-group my-2">
                    <label>Name</label>
                    <input type="text" class="form-control" name="name" value={user.name} onChange={e => inputChanged(e)} placeholder="Enter your name"/>
                </div>
                <div class="form-group my-2">
                    <label>Username</label>
                    <input type="text" class="form-control" value={user.username}  name="username" value={user.username} onChange={e => inputChanged(e)} placeholder="Enter a username"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" value={user.email} name="email" value={user.email} onChange={e => inputChanged(e)} placeholder="Enter your email"/>
                </div>
                <button type="submit" class="btn btn-primary my-3">Add</button>
            </form>
        </div>
    )
}
