export const convertCurrency = async ({ amount, from_currency, to_currency }) => {
  const rates = {
    EUR: { USD: 1.08, XAF: 655.96, GBP: 0.85 },
    USD: { EUR: 0.93, XAF: 603.38, GBP: 0.79 },
    XAF: { EUR: 0.0015, USD: 0.0017, GBP: 0.0013 },
    GBP: { EUR: 1.17, USD: 1.26, XAF: 777.70 }
  };

  const rate = rates[from_currency]?.[to_currency] || 1;
  const result = parseFloat(amount) * rate;

  return {
    from_currency,
    to_currency,
    amount: parseFloat(amount),
    rate,
    result,
    date: new Date().toISOString()
  };
};
