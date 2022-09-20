import React from "react";
import { BrowserRouter as RouteMapper, Routes, Route } from "react-router-dom";
import Home from "./Admin/Home";
import App from "./App";
import About from "./pages/About";
import HowTo from "./pages/HowTo";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./hooks/ProtectedRoute";
import Dashboard from "./Admin/Home/Dashboard";
export default function Router() {
  return (
    <RouteMapper>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/how-to" exact element={<HowTo />} />
          <Route path="/accounts/admin/login" exact element={<Home />} />
          <Route
            path="/admin"
            exact
            element={
              <ProtectedRoute redirectPath="/accounts/admin/login">
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </RouteMapper>
  );
}
