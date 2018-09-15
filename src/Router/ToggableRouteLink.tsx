import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import { routeRegistry } from "../configure";
import { RouteParams } from "next-routes";

type Props = {
    to: string;
    router?: SingletonRouter;
    queryKey: string;
    children: (args: ToggableRouteArgs) => JSX.Element
};

type ToggableRouteArgs = {
    isSelected: boolean;
}

const ToggableRouteLink: React.SFC<Props> = ({ to, router, queryKey, children }) => {
    let navigationItemSelected = false;
    if (router.query[queryKey] !== null && router.query[queryKey] !== undefined) {
        navigationItemSelected = router.query[queryKey] === to;
    }
    const newParams = { ...router.query } as RouteParams;
    newParams[queryKey] = to;

    /* the router.route is actually the page name, not the alias.
    the Router.Link will expect the page name route to passed in as the route param,
    but we dont want the slash in the front of the route
    because the Router.Link will not work properly, it should be  */
    const cleanedRoute = router.route && router.route.split("/")[1];

    return (
        <routeRegistry.Link route={cleanedRoute} params={newParams}>
            {children({ isSelected: navigationItemSelected })}
        </routeRegistry.Link>
    );
};

export default withRouter(ToggableRouteLink);
