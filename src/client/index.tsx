import React from 'react';
const App: React.FC = () => {
  return <h1>Hello, TypeScript React!</h1>;
};


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);