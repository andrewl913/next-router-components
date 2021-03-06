import React from "react";
import { SingletonRouter, withRouter } from "next/router";

type Props = {
    to: string;
    queryKey: string;
    router?: SingletonRouter;
    component: React.StatelessComponent | React.ComponentClass
}

const Route: React.SFC<Props> = ({component, to, queryKey, router }) => {
    if(!router) {
        return null;
    }
    if(!router.query) {
        return null;
    }
    
    const hasValidQueryKey = queryKey && router.query.hasOwnProperty(queryKey); 
    if(!component || !hasValidQueryKey) {
        return null;
    }

    const queryValue = router.query[queryKey];
    if(queryValue == to) {
        return React.createElement(component);
    }
    return null;
}

const DecoratedRoute = withRouter(Route);
export { Route, DecoratedRoute }; 