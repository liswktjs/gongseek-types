import _VoteDateFormat from "./date";
import _PropsWithStrictChildren from "./propWithStrictChildren";
import _PropsWithOptionalChildren from "./propsWithOptionalChildren";
import * as React from "react";

module util {
  export type VoteDateFormat =
    _VoteDateFormat;
  export type PropsWithStrictChildren<
    P,
    T extends React.ReactNode
  > = _PropsWithStrictChildren<P, T>;
  export type PropsWithOptionalChildren<
    P,
    T extends React.ReactNode
  > = _PropsWithOptionalChildren<P, T>;
}

export default util;
