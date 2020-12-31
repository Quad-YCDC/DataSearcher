import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

function App() {
  return (
    <>
      <Search
        enterButton='검색'
        style={{ width: 800, marginTop: '100px' }}
        size='large'
      />
      <h3>Test</h3>
    </>
  );
}

export default App;
