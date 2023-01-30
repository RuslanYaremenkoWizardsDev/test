import React from 'react';
import Header from './Header';
import Main from './Main';
import Uploader from './Uploader';

export const App = () => (
  <>
    <Header/>
    <Main>
      <Uploader />
    </Main>
  </>
);
