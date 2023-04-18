import { Auth } from "./firebase/config";

export function SignIn(email, password) {
  // Sign in with email and password
  Auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      userCredential.user.getIdToken().then((token) => {
        console.log("====================================");
        console.log(token);
        console.log("====================================");
        localStorage.setItem("token", token);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
}
