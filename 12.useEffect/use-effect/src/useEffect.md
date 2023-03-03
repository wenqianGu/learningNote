# use Effect
* useEffect, everytime, the component is render or re-render, the useEffect will be called. 

1. If we want the useEffect will be called less, like when password/email changes. 

* [] If the dependencies is empty here, it will only called once the component Mount 
*  [values.email, values.password] everytime those value changes, it will be called. 
* 

```js
useEffect(() => {
    console.log("render")
     return () => { // clean up function. 
      console.log("unmount")
     }

  }, [values.email, values.password]) // dependencies 

```