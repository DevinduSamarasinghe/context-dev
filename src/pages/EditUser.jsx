import React,{useState, useEffect} from 'react'
import Form from "react-bootstrap/Form"
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const EditUser = () => {
    
    const {users, setUsers, AddUser, editableUser, setEditableUser, removeUser} = useStateContext();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [borrowedBooks, setBorrowedBooks] = useState('');
   // const [user, setUser] = useState('');

   useEffect(()=>{
    
    console.log(editableUser[0].name)
    //removeUser(editableUser);
},[])


   // console.log(editableUser);
    const handleSubmit = ()=>{

        removeUser(editableUser[0].name);
        const value = {name, phone, email, borrowedBooks};
        
        setUsers([...users, value]);
        console.log(users);
        alert("User Updated Successfully");
    }


    return (
        <div>
            <h4>Edit User</h4>
    
            <div >
                <Form>
                    <label style={{margin: '8px'}}>Name</label>
                    <input type='text' style={{width: '400px', backgroundColor: 'gray'}} value={name} onChange={(e)=>setName(e.target.value)}></input>
    
                    <label style={{margin: '8px'}}>Phone</label>
                    <input type='text' style={{width: '400px', backgroundColor: 'gray'}} value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
    
                    <label style={{margin: '8px'}}>Email</label>
                    <input type='email' style={{width: '400px', backgroundColor: 'gray'}} value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    
                    <button type='button' style={{width: '100px', margin: '8px'}} onClick={()=>handleSubmit()}> Submit</button>
                </Form>
    
                <Link to={'/'}><button className="btn btn-primary" style={{margin:'8px'}}>Back</button></Link>
            </div>
        </div>
        
      )
}

export default EditUser