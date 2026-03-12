import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Config do Firebase (igual do login)
const firebaseConfig = {
    apiKey: "AIzaSyBKX2vhPtCg2viA1iBlpmW4VW6K1y3tXzA",
    authDomain: "vilankulos-5dfb1.firebaseapp.com",
    projectId: "vilankulos-5dfb1",
    storageBucket: "vilankulos-5dfb1.firebasestorage.app",
    messagingSenderId: "594610644591",
    appId: "1:594610644591:web:afd23c7d677dead9de8f9a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Espera o usuário estar logado
onAuthStateChanged(auth, user => {
    if (!user) {
        // Não está logado → redireciona para login
        window.location.href = "login/login.html";
        return;
    }

    // Seleciona elementos do menu lateral
    const menuName = document.querySelector(".menu-name");
    const menuEmail = document.querySelector(".menu-email");
    const menuAvatar = document.querySelector(".side-menu .menu-header img");

    // Header avatar
    const headerAvatar = document.querySelector(".user-avatar");

    // Atualiza dados do usuário
    menuName.textContent = user.displayName || "Usuário";
    menuEmail.textContent = user.email || "";
    menuAvatar.src = user.photoURL || "https://via.placeholder.com/80";
    headerAvatar.src = user.photoURL || "https://via.placeholder.com/35";
});
