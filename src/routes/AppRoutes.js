import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { MovieDetailPage } from "../pages/MovieDetailPage";
import SignupPage from "../pages/SignupPage";
import { AuthContext } from "../store/auth-context";

const AppRoutes = () => {
  const authCtx = useContext(AuthContext);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={
            !authCtx.user?.isLogged ? (
              <LoginPage />
            ) : (
              <Navigate replace to="/home" />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !authCtx.user?.isLogged ? (
              <SignupPage />
            ) : (
              <Navigate replace to="/home" />
            )
          }
        />
        <Route
          path="/home"
          element={
            authCtx.user?.isLogged ? (
              <HomePage />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/movie/:id"
          element={
            authCtx.user?.isLogged ? (
              <MovieDetailPage />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </main>
  );
};

export default AppRoutes;
