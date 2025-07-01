// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";

// Style sederhana bisa ditaruh di sini atau pakai CSS Modules
const styles = {
  container: { display: 'flex', flexDirection: 'column', maxWidth: '320px', margin: '50px auto' },
  input: { marginBottom: '10px', padding: '8px', fontSize: '16px' },
  button: { padding: '10px', cursor: 'pointer' },
  toggle: { marginTop: '15px', color: 'blue', cursor: 'pointer', textAlign: 'center' }
};

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async () => {
    setError(''); // Reset error
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        // Login berhasil, user akan dialihkan oleh App.jsx
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        // Registrasi berhasil
      }
    } catch (err) {
      setError(err.message); // Tampilkan pesan error dari Firebase
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>{isLogin ? 'Login' : 'Registrasi'}</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={styles.input}
      />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={styles.input}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleAuth} style={styles.button}>
        {isLogin ? 'Masuk' : 'Daftar'}
      </button>
      <p onClick={() => setIsLogin(!isLogin)} style={styles.toggle}>
        {isLogin ? 'Belum punya akun? Daftar di sini' : 'Sudah punya akun? Masuk'}
      </p>
    </div>
  );
}

export default LoginPage;