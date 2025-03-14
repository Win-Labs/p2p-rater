const calculateProfit = (marketUSDTinKRW, percent, amountKRW) => {
  // Calculate USDT at market price
  const usdtAtMarket = amountKRW / marketUSDTinKRW;

  // Calculate new price with markup
  const adjustedPrice = marketUSDTinKRW * (1 + percent / 100);

  // Calculate USDT at adjusted price
  const usdtAtAdjusted = amountKRW / adjustedPrice;

  // Profit in USDT
  const profitUSDT = usdtAtMarket - usdtAtAdjusted;

  // Profit in KRW (converting profitUSDT back to KRW)
  const profitKRW = profitUSDT * marketUSDTinKRW;

  // Percentage profit relative to the total amount spent
  const profitPercent = (profitKRW / amountKRW) * 100;

  // Clean and formatted output
  const finalString = `
    | Market Price: ${marketUSDTinKRW} KRW/USDT 
    | Percent: ${percent}%
    | Gylman Price: ${adjustedPrice} KRW/USDT
    | Amount Used: ${amountKRW.toLocaleString()} KRW
    | Profit in USDT: ${profitUSDT.toFixed(6)} USDT
    | Profit in KRW: ${profitKRW.toLocaleString()} KRW
    | Profit Percentage: ${profitPercent.toFixed(2)}%
    `;

  console.log(finalString);
};

// Test cases
calculateProfit(1477, 1, 100000);
calculateProfit(1477, 2, 100000);
calculateProfit(1477, 3, 100000);
calculateProfit(1477, 4, 100000);
calculateProfit(1477, 5, 100000);
