import React, { useState } from 'react';

function App() {
  const [novoHabito, setNovoHabito] = useState('');
  const [habitos, setHabitos] = useState([]);

  function adicionarHabito() {
    if (novoHabito.trim() === '') return;

    const novo = {
      nome: novoHabito,
      feito: false
    };

    setHabitos([...habitos, novo]);
    setNovoHabito('');
  }

  function alternarHabito(index) {
    const novos = [...habitos];
    novos[index].feito = !novos[index].feito;
    setHabitos(novos);
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

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {habitos.map((h, index) => (
          <li key={index} style={{ margin: '8px 0' }}>
            <input
              type="checkbox"
              checked={h.feito}
              onChange={() => alternarHabito(index)}
            />
            <span
              style={{
                marginLeft: '10px',
                textDecoration: h.feito ? 'line-through' : 'none'
              }}
            >
              {h.nome}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;