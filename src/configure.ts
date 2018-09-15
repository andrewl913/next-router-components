import { Registry } from "next-routes";

let routeRegistry: Registry = null;
const withRouteComponents = (routes: Registry): Registry => {
    routeRegistry = routes;
    return routes;
};

export { routeRegistry, withRouteComponents };