import { expectType } from "tsd";
import VoteDateFormat from "../src/date";
import { dateConverter } from "./__test__/dateExample";

expectType<VoteDateFormat>(
  dateConverter()
);
