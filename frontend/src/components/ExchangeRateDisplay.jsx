function ExchangeRateDisplay({ result, rate }) {
  if (!result) return null;

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Résultat : {result.toFixed(2)}</h3>
      <p>Taux utilisé : {rate}</p>
    </div>
  );
}

export default ExchangeRateDisplay;
