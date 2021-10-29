import axios from "axios";
import React from "react";
import Movie from "./Movie";
import "./App.css";

function App() {
  return(
    <HashRouter>

      <Route path='/home'>
        <h1>Home</h1>
      </Route>

      <Route path='/home/introduction'>

      <h1>introduction</h1>
      </Route>

      <Route path='/about' component={About}>
      <h1>About</h1>
      </Route>

    </HashRouter>
  )
}

export default App07;