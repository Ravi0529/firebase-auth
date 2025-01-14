import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useFirebase } from './context/Firebase';

const App: React.FC = () => {

  const firebase = useFirebase();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={firebase?.isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={firebase?.isLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={firebase?.isLoggedIn ? <Navigate to="/" /> : <Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
