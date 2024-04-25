import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHome from "./Admin/Dashboard/AdminHome";
import Management from "./Admin/Management/Management";
import Licenses from "./Admin/Licenses/Licenses";
import Billing from "./Admin/Billing/Billing";
import "./index.css";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/admin-deployh" element={<AdminHome />} />
        <Route path="/admin-deployh/management" element={<Management />} />
        <Route path="/admin-deployh/licenses" element={<Licenses />} />
        <Route path="/admin-deployh/billing" element={<Billing />} />
      </Routes>

    </Router>
    </>
  );
}

export default App;










