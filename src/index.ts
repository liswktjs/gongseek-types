import * as React from "react";
import {
  Month,
  Day,
  DateSuffix,
} from "./util";

export type VoteDateFormat =
  `${string}-${Month}-${Day}`;

export type AfterWriteDate =
  `${string}${DateSuffix}`;

export type PropsWithStrictChildren<
  P,
  T extends React.ReactNode = React.ReactNode
> = P & { children: T };

export type PropsWithOptionalChildren<
  P,
  T extends React.ReactNode = React.ReactNode
> = P & { children?: T };
