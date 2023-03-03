# Use context 
* The advantage of the using context is we can get the value of something no matter where the poistion this is in the component tree
* so this could be a deep child and we can acces the user context by saying the use context hook.
* When we change the 'value' in provider, then everyone is goting to get the update. 
* UserContext.js 
```js
import {createContext} from "react";

export const UserContext =  createContext(null);  // null is the initial value, you can pass any value you like

```

* user Provider to wrapp the component which need to 
* Both Index About want to get the user context value, then it will be needed to be wrap by Provider 
* any of the children components inside of this provider, I can get value ("hello from context")

```js
  <UserContext.Provider value="hello from context">
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
  </UserContext.Provider>
```

* Index.js: can get the value through useContext(UserContext) 
* "hello from context will display in Home page"
```js
import React, {useContext} from "react"
import { UserContext } from "../UserContext"

export function Index() {
  const msg = useContext(UserContext);
  
  return (
    <div>
      <h2>Home</h2>
      <div>{msg}</div>
    </div>
  );
}
```
* When we change the 'value' in provider, then everyone is goting to get the update. 
* we pass the state [value, setValue] as object to Index / About 
* Whenever, the context value changes or provider value changing, we're going to get the changes through use context 
* we can access to whatever we pass in as a value here, such as value/setValue here. 

```js
function AppRouter() {
  const [value, setValue] = useState('hello from context')
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
      <UserContext.Provider value={{value, setValue}}> 
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
      </UserContext.Provider>
    </div>
  </Router>
  );
}

```

# useMemo hook
* we passed a object {value, setValue} as value of use context or provider. 
* when we making lots of changes the value of object is always going to change 

```js
 const providerValue = useMemo(()=>({value, setValue}),[value, setValue])
  // this prevents this provider value (value / setValue) from changing unless the value or set value changes. 

  <UserContext.Provider value={providerValue}> 
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
      </UserContext.Provider>

```

# what we have learned so for
* how we can pass some state throughout multiple components using use context. 
* how we can also pass an object and get functions that er can actually call and 
* we can update the state across multiple components 
* 

### next step is actuall storing a user and so  
* This affects all the different pages that need the user 
* This is oneway about how to store a user and passing it through out all your components get that value using context 
1. at top level, you store some state of current user 
2. Then you allow other people to see that user by creating a context and passing the value down 
3. then those components subsribe using use context (const {user, setUser} = useContext (UserContext))
4. Now, whenever that user changes we get a new value in our state. 

