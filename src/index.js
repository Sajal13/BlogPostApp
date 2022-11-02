import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 
} from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './Components/Redux/Store';
import { Provider } from 'react-redux';
import { fetchUsers } from './Components/Redux/Users/UserSlice';
import {fetchPosts} from "./Components/Redux/Posts/PostSlice";


store.dispatch(fetchPosts())
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={ <App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

