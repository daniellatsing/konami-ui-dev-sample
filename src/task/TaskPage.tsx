import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { MOCK_TASKS } from "../data/tasks";
import "./task.css";

interface Task {
  id: number;
  task: string;
}

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const addTask = (task: string) => {
    const newTask: Task = {
      id: Date.now(),
      task: task.trim(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number, newTask: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, task: newTask.trim() } : task
      )
    );
  };

  return (
    <div className="task-container">
      <h1 className="task-header">To Do List</h1>
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />

      <AddTask onAdd={addTask} />
    </div>
  );
};

export default TaskPage;