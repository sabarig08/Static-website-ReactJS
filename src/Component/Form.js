import React from 'react';
import './Form.css';
function Form() {
    return (
        <form className='for'>
            <label>User Name:</label>
            <input></input><br></br><br></br>
            <label>Password:</label>
            <input></input>
            <div>
                <button>Submit</button>
                <button>Cancel</button>
            </div>

        </form>
    );
}
export default Form;