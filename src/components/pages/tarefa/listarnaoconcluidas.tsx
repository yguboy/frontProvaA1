import React, { useState, useEffect } from 'react';
import { Tarefa } from '../../../models/Tarefa';

function ListarNaoConcluidas() {
  const [tarefasNaoConcluidas, setTarefasNaoConcluidas] = useState<Tarefa[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/tarefas/naoconcluidas')
      .then(response => response.json())
      .then(data => setTarefasNaoConcluidas(data))
      .catch(error => console.error('Erro ao buscar tarefas não concluídas:', error));
  }, []);

  return (
    <div>
      <h1>Listar Tarefas Não Concluídas</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefasNaoConcluidas.map(tarefa => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarNaoConcluidas;
