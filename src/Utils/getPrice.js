// Calculating/Retrieving the Price as per User Selected Currency
const getPrice = (prices, selectedCurrency) => {
  let currencyPrice = "";

  prices.forEach((price) => {
    const {
      amount,
      currency: { symbol },
    } = price;

    if (symbol === selectedCurrency) {
      currencyPrice = `${symbol}${amount}`;
    }
  });

  return currencyPrice;
};

export default getPrice;
