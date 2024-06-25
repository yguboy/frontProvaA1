import React, { useState } from 'react';
import { Tarefa } from '../../../models/Tarefa';

function AlterarTarefa() {
  const [tarefaId, setTarefaId] = useState('');
  const [mensagem, setMensagem] = useState('');

  function alterarStatus() {
    fetch(`http://localhost:5000/tarefas/alterar/${tarefaId}`, {
      method: 'PATCH',
    })
      .then(response => response.json())
      .then(data => {
        setMensagem(`Status da tarefa ${tarefaId} alterado com sucesso para ${data.status}`);
        setTarefaId('');
      })
      .catch(error => console.error('Erro ao alterar status da tarefa:', error));
  }

  return (
    <div>
      <h1>Alterar Status da Tarefa</h1>
      <form onSubmit={(e) => { e.preventDefault(); alterarStatus(); }}>
        <label>Id da Tarefa:</label>
        <input type="text" value={tarefaId} onChange={(e) => setTarefaId(e.target.value)} required />
        <button type="submit">Alterar Status</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default AlterarTarefa;
