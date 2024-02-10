import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Page1 = ()=>{
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
    <div className="centered-content">
      <h2>Facebook Page Integration</h2>
      {isConnected &&(
        <div>
          <h3>Integrated Page : {businessIntegrated} </h3>
        </div>
      )}
      {!isConnected && (<button onClick={handleBusinessIntegration}>Connect Page</button>)}
      {isConnected && (
        <div>
          <button className='deleteBtn' onClick={removeIntegration}>Delete Integration</button>
          <button onClick={goToDashboard}>Reply To Messages</button>
        </div>
      )}
    </div>
  )
}

export default Page1

