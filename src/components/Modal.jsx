import React from "react";
import { FaPlus } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { IoClose } from "react-icons/io5";

function Modal({ setShowModal, todos, setTodos, itemId }) {
  const activeTodoText = todos.find((todo) => todo.id === itemId).text;

  const changeShowModal = function () {
    setShowModal(false);
  };

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
      toast.success("Muvaffaqiyatli yangilandi!");
    }
    setShowModal(false);
  };

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-[#000a]">
      <div className="absolute left-1/2 top-1/2 -translate-1/2 w-full max-w-[500px] bg-white rounded-xl px-8 py-8">
        <div className="container flex flex-col gap-4 ">
          <button
            onClick={changeShowModal}
            className="btn  self-end"
            type="button"
          >
            <IoClose className="tex-xl" />
          </button>
          <form onSubmit={handleSubmit} className="flex justify-center gap-2">
            <input
              type="text"
              name="todo-text"
              autoComplete="off"
              placeholder="Type todo text"
              className="input"
              defaultValue={activeTodoText}
            />
            <button className="btn btn-primary text-2xl">
              <GoCheck />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
