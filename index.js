/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

const us = 5.66;
const uk = 3.19;
const ie = 4.33;
const au = 6.4;
const jp = 3.9;
const ru = 1.35;

const ukCurr = us / uk;
const ieCurr = us / ie;
const auCurr = us / au;
const jpCurr = us / jp;
const ruCurr = us / ru;

const ukOver = ((1.37 - ukCurr) / ukCurr) * 100;
const ieOver = ((1.16 - ieCurr) / ieCurr) * 100;
const auOver = ((0.74 - auCurr) / auCurr) * 100;
const jpOver = ((0.87 - jpCurr) / jpCurr) * 100;
const ruOver = ((1.4 - ruCurr) / ruCurr) * 100;

console.log(ukOver);
console.log(ieOver);
console.log(auOver);
console.log(jpOver);
console.log(ruOver);
