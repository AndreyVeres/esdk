import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { StrictMode } from 'react';
import '@ant-design/v5-patch-for-react-19';
import './index.css';

const container = document.getElementById('root');

if (!container) throw new Error('The root container was not found.');

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
