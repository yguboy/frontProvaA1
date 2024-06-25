import React, { useState, useEffect } from 'react';
import { Tarefa } from '../../../models/Tarefa';

function ListarTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/tarefas/listar')
      .then(response => response.json())
      .then(data => setTarefas(data))
      .catch(error => console.error('Erro ao buscar tarefas:', error));
  }, []);

  return (
    <div>
      <h1>Listar Tarefas</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map(tarefa => (
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

export default ListarTarefas;
