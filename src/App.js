import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Personalpage from "./pages/Personalpage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import SignUpPage from "./pages/SignUpPage";
import {CookiesProvider} from "react-cookie";

function App() {
  return (
      <CookiesProvider>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Homepage/>} />
                  <Route path={"/personal"} element={<Personalpage/>} />
                  <Route path={"/login"} element={<Loginpage/>} />
                  <Route path={"/signup"} element={<SignUpPage/>} />
              </Routes>
          </BrowserRouter>
      </CookiesProvider>

  );
}

export default App;
