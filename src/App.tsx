import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import ListarTarefas from './components/pages/tarefa/listar';
import CadastrarTarefa from './components/pages/tarefa/cadastrar';
import AlterarTarefa from './components/pages/tarefa/alterar';
import ListarTarefasConcluidas from './components/pages/tarefa/listarconcluidas';
import ListarTarefasNaoConcluidas from './components/pages/tarefa/listarnaoconcluidas';

function App() {
  return (
    <div>
      <nav>
          <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/src/components/pages/tarefa/listar.tsx"> Listar Tarefas </Link> </li>
            <li> <Link to="/src/components/pages/tarefa/cadastrar.tsx"> Cadastrar Tarefas </Link> </li>
            <li> <Link to="/src/components/pages/tarefa/alterar.tsx"> Altear Tarefas </Link> </li>
            <li> <Link to="/src/components/pages/tarefa/listarconcluidas.tsx"> Listar Tarefas Concluidas </Link> </li>
            <li> <Link to="/src/components/pages/tarefa/listarnaoconcluidas.tsx"> Listar Tarefas Não Concluidas </Link> </li>
          </ul>
        </nav>
      <BrowserRouter>
        <Routes>
            <Route path="/tarefas/listar" element={<ListarTarefas></ListarTarefas>} />
            <Route path="/tarefas/cadastrar" element={<CadastrarTarefa></CadastrarTarefa>} />
            <Route path="/tarefas/alterar" element={<AlterarTarefa></AlterarTarefa>} />
            <Route path="/tarefas/listarconcluidas" element={<ListarTarefasConcluidas></ListarTarefasConcluidas>} />
            <Route path="/tarefas/listarnaoconcluidas" element={<ListarTarefasNaoConcluidas></ListarTarefasNaoConcluidas>} />
        </Routes>
        <footer>
          <p> Desenvolvido por Ygor Espada </p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
