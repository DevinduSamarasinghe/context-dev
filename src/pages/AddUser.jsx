import React, {useState} from 'react'
import { Form } from 'react-bootstrap'

import { useStateContext } from '../context/ContextProvider';
import { Link } from 'react-router-dom';
const AddUser = () => {


    const {users, setUsers, AddUser} = useStateContext();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [borrowedBooks, setBorrowedBooks] = useState('');


    const handleSubmit = ()=>{
        const user = {name, phone, email, borrowedBooks};
        setUsers([...users, user]);
        alert("User Created Successfully");
    }



  return (
    <div>
        <h4>Add User</h4>

        <div >
            <Form>
                <label style={{margin: '8px'}}>Name</label>
                <input type='text' style={{width: '400px', backgroundColor: 'gray'}} value={name} onChange={(e)=>setName(e.target.value)}></input>

                <label style={{margin: '8px'}}>Phone</label>
                <input type='text' style={{width: '400px', backgroundColor: 'gray'}} value={phone} onChange={(e)=>setPhone(e.target.value)}></input>

                <label style={{margin: '8px'}}>Email</label>
                <input type='email' style={{width: '400px', backgroundColor: 'gray'}} value={email} onChange={(e)=>setEmail(e.target.value)}></input>

                <button type='button' style={{width: '100px', margin: '8px'}} onClick={handleSubmit}> Submit</button>
            </Form>

            <Link to={'/'}><button className="btn btn-primary" style={{margin:'8px'}}>Back</button></Link>
        </div>
    </div>
    
  )
}

export default AddUser