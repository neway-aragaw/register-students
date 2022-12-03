// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';

// import Images from './Component2/Images';
// import Lists from './Component2/Lists';

import StudentList from './Components/StudentList';
import Title from './Components/Title';
import StudentProvider from './Components/StudentContext';
import AddStudent from './Components/AddStudent';
import Student from './Components/Student';
// <StudentProvider >  
//   <div className="App">
//    <Title />
//   <AddStudent/>
// <StudentList />
//     </div></StudentProvider>
function App() {
  return (

<StudentProvider >  
  <div className="App">
   <Title />
  <AddStudent/>
<StudentList />
    </div></StudentProvider>

  );
}

export default App;
