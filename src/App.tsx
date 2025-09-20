import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { MainApp } from './components/MainApp';
import { AdminPanel } from './components/AdminPanel';

type AppMode = 'landing' | 'main' | 'admin';

export default function App() {
  const [currentMode, setCurrentMode] = useState<AppMode>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'alumni' | 'admin'>('alumni');

  const handleLogin = (role: 'alumni' | 'admin') => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentMode(role === 'admin' ? 'admin' : 'main');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentMode('landing');
  };

  if (currentMode === 'landing') {
    return <LandingPage onLogin={handleLogin} />;
  }

  if (currentMode === 'admin') {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return <MainApp onLogout={handleLogout} userRole={userRole} />;
}