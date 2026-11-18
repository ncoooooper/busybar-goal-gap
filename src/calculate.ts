import type {Result} from "@shared/worksheet";

export function calculate(v:number[]):Result[]{
const [cost,saved,deposit]=v,gap=Math.max(0,cost-saved),percent=gap*100/cost;return [
 {name:"Remaining",value:percent.toFixed(1)+"%",detail:["Still needed "+gap,"Saved "+saved+" of "+cost],fraction:1-percent/100},
 {name:"Deposits",value:gap===0?"Ready":deposit?String(Math.ceil(gap/deposit)):"Set deposit",detail:["Each deposit "+deposit,"Last may be smaller"]}];
}
