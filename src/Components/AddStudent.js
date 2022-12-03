import React,{useState,useContext} from 'react'
import { StudentContext } from './StudentContext'
function AddStudent() {
    const [name,setName]= useState('')
    const [address,setAddress]= useState('')
    const [age,setAge]= useState('')
    const [students,setStudents]=useContext(StudentContext)

    const updateName=(name)=>{
        setName(name.target.value);
        // The target event property returns the element that triggered the event.
        // should use .value?read why only using value
    }
    const updateAddress=(address)=>{
        setAddress(address.target.value);
    }
    const updateAge=(age)=>{
        setAge(age.target.value);
    }

    const addStudent= e =>{
        // The preventDefault() method is used to prevent the browser from executing the default action of the selected element
        e.preventDefault();
        // Spread Operator: The spread operator eventually takes any iterable object such as an array or any other iterable object and expands the values of that iterable object individually
        // in this case ...prevStudent spreads the array
        setStudents(prevStudent=>[...prevStudent,{name:name,address:address,age:age}
        ])
    }

  return (
    // The onsubmit event is an event that occurs when you try to submit a form.
    // The onchange event occurs when the value of an element has been changed
    <form className='form' onSubmit={addStudent}><label><h3>student name</h3></label>
    <input name='name' onChange={updateName} ></input><label><h3> sex (male---female)</h3></label>
    <input className='abe' type='radio' value='male' name='age' onChange={updateAge} ></input>
    <input className='abe' type='radio' name='age' value='female' onChange={updateAge} ></input><label><h3>student address</h3></label>
    <input name='address' onChange={updateAddress} ></input><br></br><br></br>
    <button>Register</button><br></br>
    <p></p>
    
    </form>
  )
}

export default AddStudent