import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/users/ForgotPassword";
import SignInPage from "./components/users/SignIn";
import SignUpPage from "./components/users/SignUp";
import Dashboard from "./components/users/Dashboard";
import AuthLandingPage from "./components/users/AuthLandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
