import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BillingPage from "./components/BillingPage/BillingPage";
import HomePage from "./components/HomePage/HomePage";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import LoginPage from "./components/Login/LoginPage/LoginPage";
import RegisterPage from "./components/Login/Register/RegisterPage/RegisterPage";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";
import UpdateBillForm from "./components/BillingPage/UpdateBillForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/billing"
            element={
              <PrivateRoute>
                <BillingPage />
              </PrivateRoute>
            }
          />
          <Route path='/update-billing/:id' element={<PrivateRoute><UpdateBillForm /></PrivateRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
