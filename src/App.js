import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './components/Home';

// let name="Ajinath Shinde";
function App() {

  // use state for current mode and set mode

  const [mode] = useState('light');
  const [alert, setAlert] =useState(null);

    // arrow function for change mode d to l and l to d
    const toggleMode = (cls)=> {
      removeBodyClasses();
      console.log(cls);
      document.body.classList.add('bg-' + cls);
      showAlert( cls + " mode ")
      // if(mode==='light') {
      //   setMode('dark');
        
      //   //simple alert msg 
      //   showAlert("dark mode enable ", " success");
        
      //   // change whole document body color
      //   document.body.style.backgroundColor='gray';
      //   // it change title dynamicall when mode change
      //   // document.title="TextUtil-dark_mode";

      //   // inbuilt function setInterval for flash text , here we flashing our heading
      //   // setInterval(() => {
      //   //   document.title="TextUtil is amazing";
      //   // }, 2000);
      //   // setInterval(() => {
      //   //   document.title="install TextUtil now";
      //   // }, 3000);
      // }
      // else {
      
      //     setMode('light');
      //   showAlert("light mode enable ", "success");
      //   document.body.style.backgroundColor='white';
      //   // it change title dynamicall when mode change
      //   // document.title="TextUtil-light_mode";
      // }
    }

    // after change color of body using diff buttion it remove back color of previous loaded classs
    const removeBodyClasses=()=> {
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-secondary');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-link');
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-info');

    }
    // arrow function
    const showAlert =(message, type )=> {

      setAlert({
        msg:message,
         type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }

  return (
    <>  

  
  

  {/* router concept for navigation from one tab to another withough load page */}
  <Router>
    <Navbar title="TextUitls" Home="Home" About="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} /> 
       <div className="container my-3">
      <Route exact path="/">
          <TextForm showAlert={showAlert} Heading="Enter the text Below" mode={mode}/>
         </Route>
         <Route exact path="/about">
            <About mode={mode}/>
         </Route>
         <Route exact path="/home">
            <Home/>
         </Route>          
      </div>
   </Router>
   
    </>
  ); 
}
export default App;








