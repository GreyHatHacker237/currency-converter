function HistoryTable({ history }) {
  if (history.length === 0) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Historique</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th><th>Montant</th><th>De</th><th>Vers</th><th>Résultat</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{new Date(item.date).toLocaleString()}</td>
              <td>{item.amount}</td>
              <td>{item.from_currency}</td>
              <td>{item.to_currency}</td>
              <td>{item.result.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;
