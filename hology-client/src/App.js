import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Seminar from "./pages/Seminar/Seminar";
import Academy from "./pages/Academy/Academy";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Competition from "./pages/Competition/Competition";
import CaptureTheFlag from "./pages/Category-competition/CaptureTheFlag";
import CompetitiveProg from "./pages/Category-competition/CompetitiveProg";
import UiUx from "./pages/Category-competition/UIUX";
import ForgotPass from "./pages/Login/ForgotPass";
import NewPass from "./pages/Login/NewPass";
import Media from "./components/Media/Media";

import ScrollToTop from "./components/ScrollToTop";

import "./style/style.css";
import Logout from "./pages/Logout/Logout";
import PrivateRoute from "./config/PrivateRoute";
import LoginBarrier from "./config/LoginBarrier";
import Invitation from "./pages/Invitation/Invitation";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/seminar" component={Seminar} />
        <Route path="/academy" component={Academy} />
        <LoginBarrier path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/competition/capturetheflag" component={CaptureTheFlag} />
        <Route path="/competition/uiux" component={UiUx} />
        <Route
          path="/competition/competitiveprogramming"
          component={CompetitiveProg}
        />
        <Route path="/competition" component={Competition} />
        <Route path="/forgot-password" component={ForgotPass} />
        <Route path="/new-password" component={NewPass} />
        <Route path="/invitation" component={Invitation} />
      </Switch>
      <Media />
      <Footer />
    </>
  );
}

export default App;
