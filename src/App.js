import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation";
import HomePage from "./routes/homePage/HomePage";
import SignInAndSignUpPage from "./routes/signInAndSignUpPage/signInAndSignUpPage";

const Shop = () => {
  return <h1> I am the Shop Page</h1>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignInAndSignUpPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
