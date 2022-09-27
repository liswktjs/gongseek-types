/// <reference types="react" />
declare type PropsWithStrictChildren<P, T extends React.ReactNode = React.ReactNode> = P & {
    children: T;
};
export default PropsWithStrictChildren;
