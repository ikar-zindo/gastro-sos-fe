import store from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <App store={store}/>
      </React.StrictMode>
   );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
   let state = store.getState();
   rerenderEntireTree(state);
});