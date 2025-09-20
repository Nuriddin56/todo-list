import React from "react";

function Modal({ setShowModal, todos, setTodos, itemId }) {
  const activeTodoText = todos.find((todo) => todo.id === itemId).text;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    if (formData.get("todo-text") != activeTodoText) {
      setTodos((prev) => {
        const newTodos = prev.map((todo) => {
          return itemId == todo.id
            ? { ...todo, text: formData.get("todo-text") }
            : { ...todo };
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
      });
    }
    setShowModal(false);
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="todo-text"
              autoComplete="off"
              placeholder="Type todo text"
              defaultValue={activeTodoText}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
