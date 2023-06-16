import React, {useState, useEffect} from 'react' 
import {Table, InputGroup, Form} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

import EditUser from './EditUser';
const UsersList = () => {

    const navigate = useNavigate();
    const {users, setUsers, removeUser,editableUser, setEditableUser} = useStateContext();


    const handleEdit = (username)=>{
        setEditableUser(users.filter((user)=>{
            if(user.name === username){
                return user;
            }
        }))
        navigate('/edit');
    }
    
  return (
    <div>
        <h3>Users</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Borrowed Books</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>{
                    return(
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.borrowedBooks}</td>
                            <td>
                                
                                <button className="btn btn-danger" style={{margin:'4px'}} onClick={()=>removeUser(user.name)}>Delete</button>
                                
                                <button className='btn btn-warning' onClick={()=>handleEdit(user.name)}>Edit</button>
                                
                            </td>
                        </tr>
                    )
                })}
            </tbody>

            <div>
                <button className="btn btn-primary" style={{margin:'8px'}}><Link to={'/add'}>Add User</Link></button>
            </div>
            <div>
                <button className="btn btn-primary" style={{margin:'8px'}}><Link to={'/add'}>Add User</Link></button>
            </div>

        </Table>
    </div>
  )
}

export default UsersList