import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FriendPageIndex from './friend_page';
import SignUpIndex from './SignUpPage';
import Layout from './Layout';
import NoPage from './NoPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        {/* <Route path="/" element={<SignUpIndex/>}> */}
          <Route path="sign_up" element={<SignUpIndex/>}/>
          <Route path="friends" element={<FriendPageIndex/>}/>
          <Route/>
          <Route/>
          <Route path="*" element={<NoPage/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
  )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);