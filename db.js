// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-95tG2D_t9y-N8O4iuhJVkNCWyDGCklE",
    authDomain: "login-register-firebase-dc2df.firebaseapp.com",
    databaseURL: "https://login-register-firebase-dc2df-default-rtdb.firebaseio.com",
    projectId: "login-register-firebase-dc2df",
    storageBucket: "login-register-firebase-dc2df.appspot.com",
    messagingSenderId: "537741740420",
    appId: "1:537741740420:web:771f22512b768ca17ab5d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Admin Login Function - check Firestore directly
window.loginAdmin = async function (event) {
    event.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const adminCollection = collection(db, "users", "ADMIN", "");  // Access `users/ADMIN`
        const querySnapshot = await getDocs(adminCollection);

        let loginSuccess = false;
        querySnapshot.forEach((doc) => {
            const admin = doc.data();
            if (admin.Email === email && admin.Password === password) {
                loginSuccess = true;
                alert(`Welcome ${admin.Name}!`);
                window.location.href = "Dashboard.html"; // Redirect to Dashboard
            }
        });

        if (!loginSuccess) {
            alert("Invalid email or password.");
        }
    } catch (error) {
        console.error("Error during login", error);
        alert("Login failed: " + error.message);
    }
};
