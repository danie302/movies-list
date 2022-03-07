import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import { AuthContext } from "../store/auth-context";

const AppRoutes = () => {
  const authCtx = useContext(AuthContext);
  
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate replace to= '/login' />}/>
        <Route
          path="/login"
          element={
            !authCtx.user ? <LoginPage /> : <Navigate replace to="/home" />
          }
        />
        <Route
          path="/signup"
          element={
            !authCtx.user ? <SignupPage /> : <Navigate replace to="/home" />
          }
        />
        <Route
          path="/home"
          element={
            authCtx.user ? <HomePage /> : <Navigate replace to="/login" />
          }
        />
      </Routes>
    </main>
  );
};

export default AppRoutes;
