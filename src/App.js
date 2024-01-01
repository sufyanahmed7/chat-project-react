import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <div className="sidebar">
              <Sidebar />
            </div>
            <Switch>
              <Route path="/rooms/:roomId">
                <div className="Chat">
                  <Chat />
                </div>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
      {/*
        React Router version 6 Method to do routing
         <Router>
          <Routes>
            <Route exact path="/" element={<h1>Home Screen</h1>} />
            <Route
              exact
              path="/app"
              element={
                <>
                  <Sidebar />
                  <Chat />
                </>
              }
            />
          </Routes>
        </Router> */}
    </div>
  );
}

export default App;
