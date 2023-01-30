import React from 'react';
import './index.css';

type TMainProps = {
    children: React.ReactNode
}
const Main= ({children}: TMainProps) => (
  <main className='content'>
    {children}
  </main>
);

export default Main