import React from "react";
import Login from "./Login";
let isLoggedIn = false;
const currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>HELLO</h1> : <Login />}</div>
  );
}

export default App;
