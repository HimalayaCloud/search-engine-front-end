import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./component/layout/Landing";
import Auth from "./component/views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./component/views/Dashboard";
import ProtectedRoute from "./component/routing/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route
            exact
            path="/login"
            element={<Auth authRoute={"login"}></Auth>}
          ></Route>
          <Route
            exact
            path="/register"
            element={<Auth authRoute={"register"}></Auth>}
          ></Route>
          <Route exact path="/dashboard" element={<ProtectedRoute />}>
            <Route
              exact
              path="/dashboard"
              element={<Dashboard></Dashboard>}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
