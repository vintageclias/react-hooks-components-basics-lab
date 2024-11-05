

import React from 'react';  
import Navbar from './Navbar'; 
import Home from './Home';     


const About = () => {  
  return (  
    <div id="about">  
      <h2>About</h2>  
    </div>  
  );  
};  


const App = () => {  
  return (  
    <div>  
      <Navbar /> 
      <Home />    
      <About />   
    </div>  
  );  
};  

export default App;  
