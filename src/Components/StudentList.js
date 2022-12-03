import React,{useContext} from 'react'
import { StudentContext } from './StudentContext'
import Student from './Student'


function StudentList() {
  const  [Students,setStudents]=useContext(StudentContext)
  return (    
  <div className='list'>
      <h3>{`Number of students🧑‍🎓 get registered :'  `}</h3>

     <h1 className='a'>{`${Students.length-1}`}</h1>
  <h3>list of students registered</h3>
💥💥💥💥💥💥💥💥💥💥
    {
    Students.map(randomVariable=>
         (<Student name={randomVariable.name} address={randomVariable.address} age={randomVariable.age} />)
        )
    }</div>
  )
}

export default StudentList