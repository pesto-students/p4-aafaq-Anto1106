function getMaxProfit(prices) {
  let profit = 0;
  let buy_price = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (buy_price > prices[i]) buy_price = prices[i];
    let temp = prices[i] - buy_price;
    if (temp > profit) profit = temp;
  }
  return profit;
}
prices = [7, 1, 5, 3, 6, 4];
console.log('result', getMaxProfit(prices));
prices = [7, 6, 4, 3, 1];
console.log('result', getMaxProfit(prices));
/*
    Time complexity is O(n)
    Space complexity is O(1)
*/
