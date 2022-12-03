
import React,{createContext, useState} from 'react'

export const StudentContext=createContext()
const StudentProvider=(props)=> {

const [students,setStudents]=useState([{
  name:"Abebe(demo name-this name is not counted)",age:"22-(demo age-this address is not counted)",
  address:"Ethiopia-(demo address-this address is not counted)"
}])


// variable not to be used but to show it has no sense with the one that is exported
const [nonsense,setNonsense]=useState([{
  name:"Yimer",
  age:"22",
  address:"India"
}])
//  In react js props.children is used to add the data between the opening and closing JSX tags
  return (
   <StudentContext.Provider value={[students,setStudents]}>
   {props.children}
  
   </StudentContext.Provider>
  )
}

export default StudentProvider