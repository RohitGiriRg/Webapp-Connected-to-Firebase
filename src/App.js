import React from "react";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Login></Login>
    </div>
  );
};

export default App;

// handle firebase Login
// const handleLogin = (event) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       alert("Login successful!");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//     });
// };
