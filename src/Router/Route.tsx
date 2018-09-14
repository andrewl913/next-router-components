import * as React from "react";
import { SingletonRouter, withRouter } from "next/router";

type Props = {
    to: string;
    queryKey: string;
    router?: SingletonRouter;
    component: React.StatelessComponent | React.ComponentClass
}

const Route: React.SFC<Props> = ({component, to, queryKey, router }) => {
    if(!router && !router.query) {
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

export default withRouter(Route);