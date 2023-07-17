import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./insta/signup";
import Signin from "./insta/signin";
import Dashboard from "./insta/dashboard";
import Update from "./insta/update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
