import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import CEOJuniorPage from './pages/CEOJuniorPage';
import Parents30Page from './pages/Parents30Page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/ceo-junior" element={<CEOJuniorPage />} />
            <Route path="/ceojunior" element={<CEOJuniorPage />} />
            <Route path="/padres-3" element={<Parents30Page />} />
            <Route path="/padres3" element={<Parents30Page />} />
          </Routes>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
