// src/App.jsx
import React from 'react';
import Experience from './Experience'; // Ensure this matches your file path
import Projects from './Projects';     // Ensure this matches your file path

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation / Header would go here */}
      
      <main>
        {/* Placeholder for the Hero Section (Coming next) */}
        <div className="h-screen flex items-center justify-center bg-blue-50 text-blue-800">
          <h1 className="text-4xl font-bold">Hero Section Coming Soon</h1>
        </div>

        {/* The sections we built */}
        <Experience />
        <Projects />
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2026 Keith Alan T. Speirs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;