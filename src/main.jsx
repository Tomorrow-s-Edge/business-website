import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "./styles/reset.css";
// bootstrap added via npm, so we can import the css and js directly here
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter} from "react-router-dom"; // needed for navbar toggle, modals, etc.
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
