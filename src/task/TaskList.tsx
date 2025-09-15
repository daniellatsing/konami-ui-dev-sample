import React from "react";
import TaskItem from "./TaskItem";
import type { TaskListProps } from "../types";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDelete,
  onEdit,
  onAddSubtask,
}) => {
  const mainTasks = tasks.filter((t) => t.parentId === undefined);

  if (mainTasks.length === 0) {
    return (
      <>
        <p className="empty-list-msg">No tasks yet...</p>
      </>
    );
  }

  return (
    <div className="task-list">
      <div className="task-divider"></div>
      {mainTasks.map((task) => {
        const subtasks = tasks.filter((t) => t.parentId === task.id);

        return (
          <React.Fragment key={task.id}>
            <TaskItem
              task={task}
              subtasks={subtasks}
              onDelete={onDelete}
              onEdit={onEdit}
              onAddSubtask={onAddSubtask}
            />
            <div className="task-divider"></div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TaskList;
