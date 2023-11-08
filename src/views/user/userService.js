import { AuthHeader } from "helper/AuthHeader";
import { Auth } from "./firebase/config";
import axios from "axios";
import { APIurl } from "helper/API";

export function SignIn(email, password) {
  // Sign in with email and password
  Auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user.getIdToken().then((token) => {
        localStorage.setItem("token", token);
        console.log(userCredential.user.uid);
        GetUserByID(userCredential.user.uid);
      });
    })
    .catch((error) => {});
}

export function SignUp(user, password) {
  // Sign in with email and password
  Auth.createUserWithEmailAndPassword(user.email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user.getIdToken().then((token) => {
        localStorage.setItem("token", token);

        CreateUser(user, userCredential.user.uid);
      });
    })
    .catch((error) => {});
}

export function SignOut() {
  // Sign in with email and password
  Auth.signOut()
    .then((userCredential) => {
      localStorage.clear();
    })
    .catch((error) => {});
}

export async function CreateUser(user, firebase_id) {
  try {
    const { first_name, email } = user;
    const userObj = { first_name, firebase_id, email };

    const userRes = await axios.post(APIurl + "/user", userObj, AuthHeader());
    localStorage.setItem("user", JSON.stringify(userObj));
  } catch (error) {
    console.log(error);
  }
}

export const GetUserByID = async (firebase_id) => {
  const user = await axios.get(
    APIurl + "/user/check/" + firebase_id,
    AuthHeader()
  );
  localStorage.setItem("user", JSON.stringify(user.data));
  console.log("user", user.data);
};
