import React, { useState, useEffect } from 'react';
import { Tarefa } from '../../../models/Tarefa';

function CadastrarTarefa() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [categorias, setCategorias] = useState<Tarefa[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/categoria/listar')
      .then(response => response.json())
      .then(data => setCategorias(data))
      .catch(error => console.error('Erro ao buscar categorias:', error));
  }, []);

  function cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novaTarefa = {
      titulo: titulo,
      descricao: descricao,
      categoriaId: categoriaId,
    };

    fetch('http://localhost:5000/tarefas/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaTarefa),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Tarefa cadastrada:', data);
        setTitulo('');
        setDescricao('');
        setCategoriaId('');
      })
      .catch(error => console.error('Erro ao cadastrar tarefa:', error));
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={cadastrar}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        </div>
        <div>
          <label>Descrição:</label>
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </div>
        <div>
          <label>Categoria:</label>
          <select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)} required>
            <option value="">Selecione uma categoria</option>
            {categorias.map(categoria => (
              <option key={categoria.categoriaId} value={categoria.categoriaId}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarTarefa;
