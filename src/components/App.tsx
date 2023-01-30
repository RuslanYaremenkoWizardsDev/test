import React from 'react';
import { Counter } from './Counter';
import { Hello } from './Hello';
import Header from './Header';
import Main from './Main';

export const App = () => (
  <>
    <Header/>
    <Main>
      <Hello name={ 'Document Uploader' } />
      <Counter />
    </Main>
  </>
);
