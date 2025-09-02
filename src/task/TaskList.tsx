import React from "react";
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  task: string;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
  if (tasks.length === 0) {
    return (
      <>
        <p className="empty-list-msg">No tasks yet...</p>
      </>
    );
  }

  return (
    <div className="task-list">
      <div className="task-divider"></div>
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <TaskItem task={task} onDelete={onDelete} onEdit={onEdit} />
          <div className="task-divider"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskList;