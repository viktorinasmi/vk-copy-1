// @ts-ignore
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from "react";
import {Layout} from "../layout";
import {routes} from "./list";

const Routes = () => {
    const isAuth =true

    return(
        <Router>
            <Switch>
                {routes.map(route => {
                    if(route.auth && !isAuth) {
                        return false
                    }
                    return (
                        <Route exact={route.exact} path={route.path} key={`roure${route.path}`}>
                            <Layout>
                                <route.component/>
                            </Layout>
                        </Route>
                    )
                })}
                {/*<Route component={Error404}/>*/}
            </Switch>
        </Router>
    )
}

export default Routes
