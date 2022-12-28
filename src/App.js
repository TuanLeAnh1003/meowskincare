import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Pages/Admin/Admin/Admin';
import HomePage from './Pages/HomePage/HomePage/HomePage';
import AdminRoute from './Routes/AdminRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path='admin/*' element={<AdminRoute><Admin /></AdminRoute>} />
      </Routes>
    </div>
  );
}

export default App;
