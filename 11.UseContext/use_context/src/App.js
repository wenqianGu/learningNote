import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserContext } from "./UserContext";


function AppRouter() {
  const [user, setUser] = useState(null)

  const providerValue = useMemo(()=>({user, setUser}),[user, setUser])
  // this prevents this provider value (value / setValue) from changing unless the value or set value changes. 
  // this prevents this provider value (user / setUser) from changing unless the user or set User changes. 

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={providerValue}> 
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
      </UserContext.Provider>
    </div>
  </Router>
  );
}

export default AppRouter;
