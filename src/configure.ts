import { Registry } from "next-routes";

let routeRegistry: Registry = null;
const withRouteComponents = (routes: Registry) => {
    routeRegistry = routes;
};

export { routeRegistry, withRouteComponents };