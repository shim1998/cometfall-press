import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './index.css'
import Home from './home.jsx'
import Layout from './layout.jsx'
import NoPage from './nopage.jsx'
import Project from './project.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/project" element={<Project/>} />
          <Route
              path="*"
              element={<Navigate to="/project" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>,
)
