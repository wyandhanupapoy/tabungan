// src/App.jsx
import React, { useState, useEffect } from 'react';
import { auth } from './firebase/config';
import { onAuthStateChanged } from "firebase/auth";
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listener ini akan berjalan setiap kali status otentikasi berubah
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup listener saat komponen tidak lagi digunakan
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Tampilkan loading screen
  }

  // Jika ada user (sudah login), tampilkan Dashboard. Jika tidak, tampilkan Login.
  return user ? <DashboardPage /> : <LoginPage />;
}

export default App;