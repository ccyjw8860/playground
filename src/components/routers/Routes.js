import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "../home/Home";
import { Login, EditProfile, SignUp } from "../users/Login";
import Profile from "../users/Profile";
import Navigation from "../partial/Navigation";
import Footer from "../partial/Footer";

const AppRouter = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        {isLoggedIn ? (
          <>
            <Route path="/profile" component={Profile} />
            <Route path="/edit-profile" component={EditProfile} />
          </>
        ) : (
          <>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </>
        )}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
