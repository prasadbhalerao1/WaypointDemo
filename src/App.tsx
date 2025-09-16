import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Chatbot from './pages/Chatbot';
import Resources from './pages/Resources';
import Booking from './pages/Booking';
import Forum from './pages/Forum';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
        <Navbar 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
        <div className="flex">
          <Sidebar 
            isMobileMenuOpen={isMobileMenuOpen} 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
          />
          <main className="flex-1 lg:ml-64 pt-16 min-h-screen">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/forum" element={<Forum />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;