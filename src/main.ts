import {worksheet} from "@shared/worksheet";
import {calculate} from "./calculate";

const fields=[
  {
    "name": "Price",
    "unit": "",
    "initial": 20000,
    "min": 1,
    "max": 2000000,
    "step": 100
  },
  {
    "name": "Saved",
    "unit": "",
    "initial": 8000,
    "min": 0,
    "max": 2000000,
    "step": 100
  },
  {
    "name": "Deposit",
    "unit": "",
    "initial": 2000,
    "min": 0,
    "max": 100000,
    "step": 100
  }
];
worksheet({name:"Goal Gap",fields,calculate,accent:"#ECA64C",motion:{"motif":"cells","color":"#ECA64C","shine":"#FFF0BB"}});
