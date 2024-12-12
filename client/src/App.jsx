import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Employees from "./Pages/Employees/Employees.jsx";
import Layout from "./components/Layout/Layout"; // Ensure the Layout component is imported
import Welcome from './Pages/Welcome/Welcome.jsx'
// import Leaves from "./pages/Leaves";
// import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default Route for Welcome Page */}
          <Route path="/" element={<Welcome />} />
          
          {/* Dashboard and other routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          
          {/* Uncomment and define as needed */}
          {/* <Route path="/leaves" element={<Leaves />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
