import React from 'react';
import TodoList from './components/todos/TodoList';
import TodoWrite from './components/todos/TodoWrite';

function App() {
  return (
    <div>
      <h2>Todos</h2>
      <TodoWrite />
      <TodoList />
      <button>등록</button>
      <button>삭제</button>
    </div>
  );
}

export default App;
