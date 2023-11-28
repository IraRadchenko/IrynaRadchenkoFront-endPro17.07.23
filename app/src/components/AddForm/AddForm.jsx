import { useState, useRef } from "react";

import './AddForm.scss';

export default function AddForm({ onAdd, onCancel}) {
    const name = useRef();
    const userName = useRef();
    const phone = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const handleAddTask = () => {

        if (!name.current.value || !userName.current.value || !phone.current.value) {
            setErrorMessage("All fields must be filled!");
            return;
        }
        setErrorMessage('');

        onAdd({
            name: name.current.value,
            username: userName.current.value,
            phone: phone.current.value,
        });
    }

     const handleCancel = () => {
        onCancel();
    }

    return (
        <div>
            <h2>Form Page</h2>
        <form>
            <div> {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}</div>
            <input type="text"  name="name" ref={name} placeholder='Enter your Name'/> <br />
            <input type="text"   name="userName" ref={userName} placeholder='Enter your UserName'/> <br />
            <input type="tel"   name="phone" ref={phone} placeholder='Enter your phone number'/> <br />
            <input className='button' type="button" value="Add" onClick={handleAddTask}  />
            <input className='button' type='button' value='Cancel' onClick={handleCancel}/>
        </form>

        </div>
    )
}
