import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";

// import Page404 from "./pages/Page404"; // Make sure this import path is correct

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
{/* 
        <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
