import "./App.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
