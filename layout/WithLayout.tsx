import React, {FunctionComponent} from "react";
import {Layout} from "./Layout";

export const WithLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(restProps: T): JSX.Element {
        return (
            <Layout>
                <Component {...restProps} />
            </Layout>
        );
    };
};