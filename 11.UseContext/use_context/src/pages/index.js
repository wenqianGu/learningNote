import React, {useContext} from "react"
import { UserContext } from "../UserContext"
import { login } from "../utiles/login";

export function Index() {
  const {user, setUser} = useContext(UserContext);
  console.log(user)
  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={async () => {
          // call login out
          setUser(null);
        }}>logout</button>
      ) : (
        <button onClick={async () => {
          const user = await login();
          setUser(user);
        }}>login</button>
      )}
      
    </div>
  );
}