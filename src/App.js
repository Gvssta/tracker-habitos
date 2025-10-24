import React, { useState } from 'react';

function App() {
  const [novoHabito, setNovoHabito] = useState('');
  const [habitos, setHabitos] = useState([]);

  function adicionarHabito() {
    if (novoHabito.trim() === '') return;

    setHabitos([...habitos, novoHabito]);
    setNovoHabito('');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tracker de Hábitos</h1>

      <input
        type="text"
        value={novoHabito}
        onChange={(e) => setNovoHabito(e.target.value)}
        placeholder="Digite um novo hábito"
      />

      <button onClick={adicionarHabito}>Adicionar</button>

      <ul>
        {habitos.map((h, index) => (
          <li key={index}>{h}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;