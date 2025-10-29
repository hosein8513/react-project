import React from 'react';
import Content from '../layout/content/Content';
import Header from '../layout/header/Header';
import Sidebar from '../layout/sidebar/Sidebar';

const App = () => {
  return (
    <div className='p-4'>
      <Content/>
      <Header/>
      <Sidebar/>
    </div>
  );
};

export default App;