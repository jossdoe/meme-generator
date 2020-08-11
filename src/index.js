import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { EditorContextProvider } from './context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EditorContextProvider>
        <App />
      </EditorContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
