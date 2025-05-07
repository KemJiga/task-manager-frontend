import { Routes, Route, useLocation } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isHomePage ? 'flex-start' : 'center',
        alignItems: isHomePage ? 'flex-start' : 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: isHomePage ? '#f0f2f5' : '#ffffff',
      }}
    >
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;