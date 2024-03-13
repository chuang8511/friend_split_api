import React from 'react';
const App: React.FC = () => {
  return (
    <div className='App'>
      <ItemView
        imageSrc=''
        userName='ChunHao'
        amount={1000}
        isOwed={true}/>
    </div>

  )
};


import { createRoot } from 'react-dom/client';
import ItemView from './friend_page';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);