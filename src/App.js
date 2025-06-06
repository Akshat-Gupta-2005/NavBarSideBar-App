import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar4/SideBar4";
import NavBar from "./components/NavBar/NavBar";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import User from "./pages/Team/User";
import BannedUser from "./pages/Team/BannedUser";

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex", height: "100vh" }}>
        <NavBar />
        <SideBar />
          <div style={{ position: "absolute", top: "50px", left: "60px",boxSizing: "border-box", padding: "50px 500px"}}>
            <div style={{ padding: "1rem"  ,backgroundColor: "#f0f2f5"}}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/team/user" element={<User />} />
                <Route path="/team/banned-user" element={<BannedUser />} />
              </Routes>
            </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
