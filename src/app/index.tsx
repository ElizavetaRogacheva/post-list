import { ApiProvider } from '@reduxjs/toolkit/query/react';

import Routing from '../pages';
import { postApi } from './providers';

import './index.scss';

function App() {
  return (
    <div className="App">
      <ApiProvider api={postApi}>
        <Routing />
      </ApiProvider>
    </div>
  );
}

export default App;
