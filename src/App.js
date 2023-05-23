import './App.css';
import { useState } from 'react';
import AddUser from './Components/Users/AddUsers'
import UserList from './Components/Users/UserLIst';


function App() {
 const [userList, setUserList]=useState([]);

 const addUserHandler = (uName, uAge) => {
  setUserList((previousList) => {
    return [...previousList, {name: uName, age: uAge, id: Math.random().toString()}]
  })
 }

  return (
    <div>
      <AddUser onAddUser= {addUserHandler}/>
      <UserList users={userList}/>
    </div>

  );
}

export default App;
