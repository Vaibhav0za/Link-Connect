import dayjs from "dayjs";

export const DrawerArray = [
  {
    id: 1,
    title: "Category",
    icon: require("../Assets/Svg/User.svg"),
  },
  {
    id: 2,
    title: "Seller",
    icon: require("../Assets/Svg/User.svg"),
  },
  {
    id: 3,
    title: "Buyer",
    icon: require("../Assets/Svg/User.svg"),
  },
];

export const pricingTermsList = [
  {
    id: 1,
    name: "EXW",
  },
  {
    id: 2,
    name: "FCA",
  },
  {
    id: 3,
    name: "FAS",
  },
  {
    id: 4,
    name: "FOB",
  },
  {
    id: 5,
    name: "CFR",
  },
  {
    id: 6,
    name: "CIF",
  },
  {
    id: 7,
    name: "CPT",
  },
  {
    id: 8,
    name: "CIP",
  },
  {
    id: 9,
    name: "DAF",
  },
  {
    id: 10,
    name: "DES",
  },
  {
    id: 11,
    name: "DEQ",
  },
  {
    id: 12,
    name: "DDU",
  },
  {
    id: 13,
    name: "Other",
  },
];

export const supplyList = [
  {
    id: 1,
    name: "One time",
    value: "one_time",
  },
  {
    id: 2,
    name: "Ongoing",
    value: "ongoing",
  },
];

export const unitList = [
  {
    id: 1,
    name: "MT",
  },
  {
    id: 2,
    name: "KG",
  },
  {
    id: 3,
    name: "LB",
  },
];

export const downloadOptions = [
  {
    id: 1,
    title: "Download as PDF",
    name: "Download as PDF",
  },
  {
    id: 2,
    title: "Download as CSV",
    name: "Download as CSV",
  },
  {
    id: 3,
    title: "Download as EXCEL",
    name: "Download as EXCEL",
  },
];

export const reportList = [
  {
    id: 1,
    title: "Fake ID",
  },
  {
    id: 2,
    title: "Bullying",
  },
  {
    id: 3,
    title: "Spam",
  },
  {
    id: 4,
    title: "Something else",
  },
];

export const shortcutsItems = [
  {
    label: "Today",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("day"), today.endOf("day")];
    },
  },
  {
    label: "This Week",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("week"), today.endOf("week")];
    },
  },
  {
    label: "Last Week",
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(7, "day");
      return [prevWeek.startOf("week"), prevWeek.endOf("week")];
    },
  },
  {
    label: "Last 7 Days",
    getValue: () => {
      const today = dayjs();
      return [today.subtract(7, "day"), today];
    },
  },
  {
    label: "Current Month",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("month"), today.endOf("month")];
    },
  },
  {
    label: "Next Month",
    getValue: () => {
      const today = dayjs();
      const startOfNextMonth = today.endOf("month").add(1, "day");
      return [startOfNextMonth, startOfNextMonth.endOf("month")];
    },
  },
  { label: "Reset", getValue: () => [null, null] },
];
