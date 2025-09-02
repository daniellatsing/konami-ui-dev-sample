import React, { useState } from "react";
import "./task.css";

interface AddTaskProps {
  onAdd: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== "") {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <div className="add-task-container">
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          id="task"
          value={task}
          placeholder="Add New Task"
          aria-label="Add New Task"
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTask;