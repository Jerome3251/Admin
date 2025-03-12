// Your Firebase configuration details
const firebaseConfig = {
  apiKey: "AIzaSyA-95tG2D_t9y-N8O4iuhJVkNCWyDGCklE",
  authDomain: "login-register-firebase-dc2df.firebaseapp.com",
  databaseURL: "https://login-register-firebase-dc2df-default-rtdb.firebaseio.com",
  projectId: "login-register-firebase-dc2df",
  storageBucket: "login-register-firebase-dc2df.firebasestorage.app",
  messagingSenderId: "537741740420",
  appId: "1:537741740420:web:771f22512b768ca17ab5d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Fetch registered users from the "users" collection and display them.
db.collection("users").get()
  .then((querySnapshot) => {
    // Update the total user count.
    document.getElementById("userCount").textContent = querySnapshot.size;
    let userListHtml = "";
    // Loop through each user document and build the list items.
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      userListHtml += `
        <li class="list-group-item">
          <strong>${user.name || "Unnamed User"}</strong> - ${user.email || "No Email"}
        </li>
      `;
    });
    // Insert the generated HTML into the user list container.
    document.getElementById("userList").innerHTML = userListHtml;
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
    document.getElementById("userCount").textContent = "Error";
    document.getElementById("userList").innerHTML = `<li class="list-group-item text-danger">Error fetching user data</li>`;
  });
