// Importações do Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAuth, 
           signInWithEmailAndPassword, 
           createUserWithEmailAndPassword, 
           signInWithPopup, 
           GoogleAuthProvider, 
           OAuthProvider, 
           onAuthStateChanged, 
           updateProfile } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
  import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

  // Config do Firebase
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
  const storage = getStorage(app);

  // Redireciona automaticamente se já estiver logado
  onAuthStateChanged(auth, user => {
    if(user){
      window.location.href="../index.html";
    }
  });

  // Login com Email
  document.querySelector(".login-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href="../index.html";
    } catch(e) {
      alert(e.message);
    }
  });

  // Criar Conta
  document.querySelector("#createAccount button").addEventListener("click", async () => {
    const name = document.getElementById("newName").value;
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
    const photoFile = document.getElementById("profilePhoto").files[0];

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      let photoURL = "";
      if(photoFile){
        const storageRef = ref(storage, `profilePhotos/${user.uid}`);
        await uploadBytes(storageRef, photoFile);
        photoURL = await getDownloadURL(storageRef);
      }

      // Atualiza perfil
      await updateProfile(user, { displayName: name, photoURL });

      window.location.href="../index.html";
    } catch(e) {
      alert(e.message);
    }
  });

  // Login com Google
  document.querySelector(".social-btn.google").addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href="../index.html";
    } catch(e) {
      alert(e.message);
    }
  });

  // Login com Apple
  document.querySelector(".social-btn.apple").addEventListener("click", async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      await signInWithPopup(auth, provider);
      window.location.href="../index.html";
    } catch(e) {
      alert(e.message);
    }
  });
