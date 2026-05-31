import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AuthProvider from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Auth />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
