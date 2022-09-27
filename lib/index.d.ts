import * as React from "react";
import { Month, Day } from "./util";
export declare type VoteDateFormat = `${string}-${Month}-${Day}`;
export declare type PropsWithStrictChildren<P, T extends React.ReactNode = React.ReactNode> = P & {
    children: T;
};
export declare type PropsWithOptionalChildren<P, T extends React.ReactNode = React.ReactNode> = P & {
    children?: T;
};
