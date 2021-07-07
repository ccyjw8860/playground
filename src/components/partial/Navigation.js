import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../redux/userSlice";
import { Redirect } from "react-router";

const Navigation = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(userLogout());
    return <Redirect to="/" />;
  };
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {isLoggedIn ? (
        <>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="edit-profile">Edit Profile</Link>
          </li>
          <li onClick={Logout}>Logout</li>
        </>
      ) : (
        <li>
          <Link to="login">Login</Link>
        </li>
      )}
    </ul>
  );
};
export default Navigation;
