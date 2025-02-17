import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route, Navigate} from "react-router-dom";
import './index.css'
import Home from './home.jsx'
import Layout from './layout.jsx'
import NoPage from './nopage.jsx'
import Project from './project.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Project/>} />
          <Route path="about" element={<Navigate to="https://cometfallpress.com/"/>}/>
          <Route path="home" element={<Navigate to="https://cometfallpress.com/"/>}/>
          <Route
              path="*"
              element={<Navigate to=""/>}
          />
        </Route>
      </Routes>
  </BrowserRouter>
)
