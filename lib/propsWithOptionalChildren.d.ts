/// <reference types="react" />
declare type PropsWithOptionalChildren<P, T extends React.ReactNode = React.ReactNode> = P & {
    children?: T;
};
export default PropsWithOptionalChildren;
