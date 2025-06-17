import React, { useState } from 'react';

function ConverterForm({ onConvert }) {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('EUR');
  const [to, setTo] = useState('USD');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from === to) return alert("Veuillez choisir deux devises différentes !");
    onConvert({ amount, from_currency: from, to_currency: to });
  };

  const currencies = [
    { code: 'EUR', label: 'Euro' },
    { code: 'USD', label: 'Dollar US' },
    { code: 'XAF', label: 'Franc CFA' },
    { code: 'GBP', label: 'Livre Sterling' }
  ];

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
      <input
        type="number"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
        required
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {currencies.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
      </select>
      <span>→</span>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {currencies.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
      </select>
      <button type="submit">Convertir</button>
    </form>
  );
}

export default ConverterForm;
