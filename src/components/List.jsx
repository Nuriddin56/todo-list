import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";

import Modal from "./Modal";

function List({ todos, setTodos }) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id, e) => {
    e.stopPropagation();
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id != id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <div className="container">
      {showModal && (
        <Modal
          todos={todos}
          setTodos={setTodos}
          itemId={itemId}
          setShowModal={setShowModal}
        />
      )}
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <li
                className={`flex 
                }`}
              >
                <span
                  className={`mr-80 ${todo.isComplated ? "line-through" : ""}`}
                >
                  {todo.text}
                </span>

                <button
                  onClick={(e) => handleDelete(todo.id, e)}
                  className="btn"
                >
                  <FaTrash />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default List;
