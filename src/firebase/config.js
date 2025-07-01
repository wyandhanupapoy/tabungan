// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// GANTI DENGAN KONFIGURASI FIREBASE ANDA DARI PROYEK SEBELUMNYA
const firebaseConfig = {
  apiKey: "AIzaSyAJjlYiIbYeSBafo0BUIqQ51MqIm_MkK7Q",
  authDomain: "tabungan-pasangan-kita.firebaseapp.com",
  projectId: "tabungan-pasangan-kita",
  storageBucket: "tabungan-pasangan-kita.firebasestorage.app",
  messagingSenderId: "208593187365",
  appId: "1:208593187365:web:dbd5650cd8188667b685cc",
  measurementId: "G-NENXG9QMBL"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor service Firebase yang akan digunakan di seluruh aplikasi
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);