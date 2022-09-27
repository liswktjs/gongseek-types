import VoteDateFormat from "../../src/date";
import {
  Day,
  Month,
} from "../../src/util";

export const dateConverter =
  (): VoteDateFormat => {
    const date = new Date();
    date.setDate(date.getDate());
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const tMonth = String(
      month
    ).padStart(2, "0") as Month;
    const tDay = String(day).padStart(
      2,
      "0"
    ) as Day;

    return `${year}-${tMonth}-${tDay}`;
  };
