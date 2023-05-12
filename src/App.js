import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app_body">
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />
            <Route path="/" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
