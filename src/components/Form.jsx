import React from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

function Form({ setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: uuidv4(),
      isComplated: false,
    };

    const formData = new FormData(e.target);

    todo.text = formData.get("todo-text");

    if (todo.text.trim()) {
      setTodos((prev) => {
        localStorage.setItem("todos", JSON.stringify([todo, ...prev]));

        return [todo, ...prev];
      });
      toast.success("Yangi todo qo'shildi");
    } else {
      toast.warning("Text yozish shart!");
    }

    e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="flex justify-center gap-2">
        <input
          type="text"
          name="todo-text"
          autoComplete="off"
          placeholder="Type todo text"
          className="input"
        />
        <button className="btn btn-primary text-2xl">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}

export default Form;
