import React, { useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.min.css';

import Complete from './components/Complete';
import Header from './components/Header';
import Info from './components/Card'

function App() {

  useEffect(() => {
    document.title = "Bot Enot";  
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='main'>
        <Complete />
        <Info />
      </main>
    </div>
  );
}

export default App;
