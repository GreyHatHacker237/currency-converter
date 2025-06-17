import React, { useState } from 'react';
import ConverterForm from './components/ConverterForm';
import ExchangeRateDisplay from './components/ExchangeRateDisplay';
import HistoryTable from './components/HistoryTable';
import { convertCurrency } from './api';

function App() {
  const [conversion, setConversion] = useState(null);
  const [history, setHistory] = useState([]);

  const handleConvert = async (data) => {
    const result = await convertCurrency(data);
    setConversion(result);
    setHistory([result, ...history]); // ajoute au début
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>💱 Convertisseur de Devises</h1>
      <ConverterForm onConvert={handleConvert} />
      <ExchangeRateDisplay result={conversion?.result} rate={conversion?.rate} />
      <HistoryTable history={history} />
    </div>
  );
}

export default App;
