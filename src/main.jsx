// components imports

import App from './App.jsx';
import store from './Redux/store.js';

// css imports
import './index.css';

// libraries imports
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
  </Provider>,
)
