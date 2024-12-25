import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './pages/header/header.jsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import _404 from './pages/nomatch/_404.jsx';
import PostUser from './pages/employee/PostUser.jsx';
import UpdateUser from './pages/employee/UpdateUser.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<PostUser />} />
        <Route path="/employee/:id" element={<UpdateUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<_404/>} />
      </Routes>
    </>
  )
}

export default App
