import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Forget from "./pages/auth/forgetpass";
import CheckCode from "./pages/auth/checkCode";
import ChangePass from "./pages/auth/changePassword";
import Hotels from "./pages/landing/hotels";

// import Page404 from "./pages/Page404"; // Make sure this import path is correct

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/hotels" element={<Hotels />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/forget" element={<Forget />} /> 
        <Route path="/checkcode/:email" element={<CheckCode />} /> 
        <Route path="/changepass/:email" element={<ChangePass />} /> 
{/* 
        <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
