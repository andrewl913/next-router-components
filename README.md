[![Build Status](https://travis-ci.org/andrewl913/next-router-components.svg?branch=master)](https://travis-ci.org/andrewl913/next-router-components)

# next-router-components
react components built on top of the next-router
built on next-routes and the built-in next routing

## motivation
* Next js is very opinionated about routing.
* After js wants you to roll your own routing.
* next-routes is nice but doesn't give all of what we need
* prefer using render props and component injection over HOC

## getting started
Lets hook this into the routes configuration in routes.js

```jsx
import Routes from "next-routes";
import { withRouteComponents } from "next-router-components";
const routes = new Routes();
routes
    .add("pagefoo", "/browse/:item?")

export default withRouteComponents(routes);
```
After this is configured just import the components and start routing!

```jsx
import { Route, ToggableRouteLink } from "next-router-components"
// your react code will go here

```

## components

### Route
#### Props
` {queryKey: string , to: string, component: React.ComponentType } `
#### Example
```jsx
import { Route } from "next-router-components"
const queryKey="item"; // this key is used to reference either
                       // A: a slug param defined in the next-routes route table. 
                       // B: a query string param.

const SomePage: React.SFC = () =>
    <>
        <Route queryKey={queryKey} to="pagefoo" component={PageFoo} />
        <Route queryKey={queryKey} to="pagebar" component={PageBar} />
        <Route queryKey={queryKey} to="pagequaz" component={PageQuaz} />
        <Route queryKey={queryKey} to="pagefi" component={PageFi} />
    </>;
```

### TogglableRouteLink
#### Props
`{queryKey: string , to: string, children(args: ToggleRouteArgs) => JSX.Element }`
#### Example
```jsx
import { TogglableRouteLink } from "next-router-components"

 <TogglableRouteLink
    queryKey={"item"}
    to={"new"}>
    {({ isSelected }) =>
         isSelected
         ? <div className="selected"> some data </div>
         : <div > some data </div>
    }
</TogglableRouteLink>
```




