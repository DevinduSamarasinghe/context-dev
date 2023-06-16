import React, {useState, useContext, createContext} from "react"

const StateContext = createContext();   //we create the context here

export const ContextProvider = ({children}) => {
    
    
    const [users, setUsers] = useState([{name: "Dave", phone: "0763212312",email: "dave123@gmail.com", borrowedBooks: ""}]);

    const [editableUser, setEditableUser] = useState({});

    const addUser = (user)=>{
        setUsers([...users, user]);
    }

    const editUser = (user)=>{
        var tempVal;
        users.filter((user)=>{
            tempVal =user;
        })

        
    }
    const removeUser = (name)=>{
        setUsers(users.filter((user)=>{
            return user.name !== name;
        }))
    }

    

    return(
        <StateContext.Provider value={{ 
            users,setUsers,addUser, removeUser, editableUser,setEditableUser
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

