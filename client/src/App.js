import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import './App.css';
import Main from './components/Main';
import { verifyUser } from './services/auth';
import Footer from './components/Footer'


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=> {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  }

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Main
        setCurrentUser={setCurrentUser}
      />
      <Footer/>
    </div>
  );
}

export default App;