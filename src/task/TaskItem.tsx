// Notes for future implementation:
// Character limit for task name?
// Accessibility in design (e.g, "edit" button)
// Design choices in buttons ("save" vs. cancel)

import React, { useState } from "react";

interface Task {
  id: number;
  task: string;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task.task);

  const handleSaveEdit = () => {
    if (editTask.trim() !== "") {
      onEdit(task.id, editTask);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditTask(task.task);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <div className="task-content">
        {isEditing ? (
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            className="task-edit-input"
            autoFocus
          />
        ) : (
          <span className="task-name">{task.task}</span>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button onClick={handleSaveEdit} className="save-btn">
              SAVE
            </button>
            <button onClick={handleCancelEdit} className="cancel-btn">
              CANCEL
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              EDIT
            </button>
            <button onClick={() => onDelete(task.id)} className="delete-btn">
              DELETE
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;