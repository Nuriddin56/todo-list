import React, { useState } from "react";
import { FaRegTrashCan, FaPencil } from "react-icons/fa6";
import { toast } from "react-toastify";
import Modal from "./Modal";

function List({ todos, setTodos }) {
  const [showModal, setShowModal] = useState(false);
  const [itemId, setItemId] = useState(null);

  const handleDelete = (id, e) => {
    e.stopPropagation();
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id != id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
    toast.error("Muvaffaqiyatli o'chirildi");
  };

  const handleComplated = (id) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isComplated: !todo.isComplated }
        : { ...todo };
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
    toast.success("Vazifa bajarildi!");
  };

  const handleChange = (id, e) => {
    e.stopPropagation();

    setShowModal(true);
    setItemId(id);
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
      <ul className="flex flex-col gap-4">
        {todos &&
          todos.map((todo) => {
            return (
              <li
                onClick={() => handleComplated(todo.id)}
                key={todo.id}
                className={`flex items-center gap-4 shadow-md px-4 py-4 rounded-md ${
                  todo.isComplated ? "opacity-60" : ""
                }`}
              >
                <span
                  className={`mr-auto ${
                    todo.isComplated ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={(e) => handleChange(todo.id, e)}
                  className="btn btn-info"
                >
                  <FaPencil className="text-white" />
                </button>{" "}
                <button
                  onClick={(e) => handleDelete(todo.id, e)}
                  className="btn btn-error"
                >
                  <FaRegTrashCan className="text-white" />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default List;
