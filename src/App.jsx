import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeginScreen from './components/BeginScreen';
import Countdown from './components/Countdown';
import TapEnvelope from './components/TapEnvelope';
import Message from './components/Message';
import Wish from './components/Wish';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<BeginScreen />} />
        <Route path="/" element={<Countdown />} />
        <Route path='/message' element={<TapEnvelope />} />
        <Route path='/wish' element={<Wish />} />
      </Routes>
    </Router>
  );
}

export default App;
