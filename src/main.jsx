import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./redux/store.js";
import "./index.css";

// ReactDOM.createRoot(document.getElementById('root')).
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);