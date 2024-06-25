import React, { useState, useEffect } from 'react';
import { Tarefa } from '../../../models/Tarefa';

function ListarConcluidas() {
  const [tarefasConcluidas, setTarefasConcluidas] = useState<Tarefa[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/tarefas/concluidas')
      .then(response => response.json())
      .then(data => setTarefasConcluidas(data))
      .catch(error => console.error('Erro ao buscar tarefas concluídas:', error));
  }, []);

  return (
    <div>
      <h1>Listar Tarefas Concluídas</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefasConcluidas.map(tarefa => (
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

export default ListarConcluidas;
