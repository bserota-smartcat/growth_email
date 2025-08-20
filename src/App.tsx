import React, { useState } from 'react';
import './App.css';
import EmailTemplate from './components/EmailTemplate';

function App() {
  const [currentIteration, setCurrentIteration] = useState<'iteration1' | 'iteration2.1' | 'iteration2.2'>('iteration1');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Smartcat Translation Completion</h1>
        <p>Professional email template with interactive project metrics</p>
      </header>

      <div className="toggle-container">
        <button 
          className={`toggle-btn ${currentIteration === 'iteration1' ? 'active' : ''}`}
          onClick={() => setCurrentIteration('iteration1')}
        >
          Iteration 1
        </button>
        <button 
          className={`toggle-btn ${currentIteration === 'iteration2.1' ? 'active' : ''}`}
          onClick={() => setCurrentIteration('iteration2.1')}
        >
          Iteration 2.1
        </button>
        <button 
          className={`toggle-btn ${currentIteration === 'iteration2.2' ? 'active' : ''}`}
          onClick={() => setCurrentIteration('iteration2.2')}
        >
          Iteration 2.2
        </button>
      </div>

      <div className="email-container">
        <EmailTemplate iteration={currentIteration} />
      </div>
    </div>
  );
}

export default App;
