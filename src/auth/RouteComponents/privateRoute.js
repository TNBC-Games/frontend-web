import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../utils/utils";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isLogin() ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                        }}
                    />
                )
        }
    />
);

export default PrivateRoute;