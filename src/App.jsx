import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  return (
    <>
      <main>
        <Form setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;
