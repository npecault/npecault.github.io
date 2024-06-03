import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StorageContext from "./storage-service/StorageContext";
import LocalStorageService from "./storage-service/LocalStorageService";

const localStorageService: LocalStorageService = new LocalStorageService();
localStorageService.startCheckInterval();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <StorageContext.Provider value={localStorageService}>
          <App />
      </StorageContext.Provider>
  </React.StrictMode>
);
