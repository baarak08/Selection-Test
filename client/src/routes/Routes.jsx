import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import EmailVerificationPage from "../pages/EmailVerificationPage";

const routes = [
  <Route path="/login" element={<LoginPage />}></Route>,
  <Route path="/register" element={<RegisterPage />}></Route>,
  <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>,
  <Route path="/home" element={<HomePage />}></Route>,
  <Route path="/profile" element={<ProfilePage />}></Route>,
  <Route path="/change-password" element={<ChangePasswordPage />}></Route>,
  <Route
    path="/email-verification"
    element={<EmailVerificationPage />}
  ></Route>,
];

export default routes;
