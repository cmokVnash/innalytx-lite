import "./App.css";
import "antd/dist/antd.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login/Login";


function App() {

  return (
    <>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
