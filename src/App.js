import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { getUser } from "./utils/utils";
import LandingPage from "./pages/landing/Landingpage.component";
import Login from "./pages/login/Login.component";
import Baseview from "./pages/baseview/Baseview.component";
import Dashboard from "./pages/dashboard/Dashboard.component";
import { authContext } from "./context/AuthContext";

const App = () => {
  const { isLoggenIn } = useContext(authContext);
  console.log("2", isLoggenIn);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {!isLoggenIn && (
          <Route
            path="/login"
            element={<Login logAcc="Login as Help Desktop Agent" />}
          />
        )}
        {!isLoggenIn && (
          <Route path="/login-ad" element={<Login logAcc="Login as Admin" />} />
        )}
        {isLoggenIn && <Route path="/dashboard" element={<Baseview />} />}
        {isLoggenIn && <Route path="/home" element={<Dashboard />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
