import React from "react";
import { useDispatch } from "react-redux";
import { authService, firebaseInstance } from "../../myBase";
import { userLogin } from "../../redux/userSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const googleProvider = new firebaseInstance.auth.GoogleAuthProvider();
  const facebookProvider = new firebaseInstance.auth.FacebookAuthProvider();
  const googleLogin = async () => {
    await authService.signInWithPopup(googleProvider);
    const user = await authService.currentUser;
    const userObj = {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    dispatch(userLogin(userObj));
  };

  const facebookLogin = async () => {
    await authService.signInWithPopup(facebookProvider);
    const user = await authService.currentUser;
    const userObj = {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    dispatch(userLogin(userObj));
  };

  return (
    <>
      <div>
        <ul>
          <li>
            <button onClick={googleLogin}>Login with Google</button>
          </li>
          <li>
            <button onClick={facebookLogin}>Login with Facebook</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export const EditProfile = () => {
  return <span>Edit Profile</span>;
};

export const SignUp = () => {
  return <span>Sign Up</span>;
};
