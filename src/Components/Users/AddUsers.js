import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = props => {
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState();


    const userNameHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const userAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid input!",
                message: "Please enter a valid name and age (non-empty value)."
            })
            return ;
        }
        if(+enteredAge < 1) {
            setError({
                title: "Invalid age!",
                message: "Please enter a valid age (age > 1)."
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge)
        setEnteredUserName('')
        setEnteredAge('')
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <React.Fragment>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
        <Card cssName={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id="username" value={enteredUserName} type="text" onChange={userNameHandler}></input>
            <label htmlFor='age'>Age (in years)</label>
            <input id="age" type="number" value={enteredAge} onChange={userAgeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </React.Fragment>
        
    );
}

export default AddUsers;