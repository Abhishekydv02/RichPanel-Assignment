import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.modules.css';

const Home = ()=>{
  const [isConnected, setIsConnected]=useState(false);
  const [businessIntegrated , setbusinessIntegrated] = useState('');

  useEffect(()=>{
    
  })

  const handleBusinessIntegration = () => {
    setIsConnected(true);
  }

  const removeIntegration = () => {
    setIsConnected(false);
  }
    
  const goToDashboard = () => {
     
  }

  return(
    <div className="centered-container">
      <h2>Facebook Page Integration</h2>    
      
      {!isConnected && (
      <div>
        <button  onClick={handleBusinessIntegration}>Connect Page</button>
      </div>)}

      {isConnected && (
        <div className='integrationBtns'>
          <h3>Integrated Page : {businessIntegrated} </h3>
          <button className='deleteBtn' onClick={removeIntegration}>Delete Integration</button>
          <button onClick={goToDashboard}>Reply To Messages</button>
        </div>
      )}
    </div>
  )
}

export default Home

