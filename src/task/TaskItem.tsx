import React, { useState } from "react";
import type { TaskItemProps } from "../types";

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  subtasks,
  onDelete,
  onEdit,
  onAddSubtask
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task.task);

  const [addingSubtask, setAddingSubtask] = useState(false);
  const [newSubtaskText, setNewSubtaskText] = useState("");

  const [editingSubtaskId, setEditingSubtaskId] = useState<number | null>(null);
  const [editSubtaskText, setEditSubtaskText] = useState("");

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

      <div className="subtask-container">
        {subtasks.length === 0 && !addingSubtask && (
          <span
            onClick={() => setAddingSubtask(true)}
          >
            Click to add a subtask
          </span>
        )}

        {addingSubtask && (
          <div>
            <input
              value={newSubtaskText}
              onChange={(e) => setNewSubtaskText(e.target.value)}
              autoFocus
            />
            <button
            className="save-btn"
              onClick={() => {
                if (newSubtaskText.trim() !== "") {
                  onAddSubtask(newSubtaskText, task.id);
                  setNewSubtaskText("");
                  setAddingSubtask(false);
                }
              }}
            >
              SAVE
            </button>
            <button onClick={() => setAddingSubtask(false)}>CANCEL</button>
          </div>
        )}

        {subtasks.map((sub) =>
          editingSubtaskId === sub.id ? (
            <div key={sub.id}>
              <input
                value={editSubtaskText}
                onChange={(e) => setEditSubtaskText(e.target.value)}
              />
              <button
                onClick={() => {
                  onEdit(sub.id, editSubtaskText);
                  setEditingSubtaskId(null);
                }}
              >
                SAVE
              </button>
              <button className="cancel-btn" onClick={() => setEditingSubtaskId(null)}>CANCEL</button>
            </div>
          ) : (
            <div key={sub.id}>
              <span className="subtask-name"
                onClick={() => {
                  setEditingSubtaskId(sub.id);
                  setEditSubtaskText(sub.task);
                }}
              >
                {sub.task}
              </span>
              <button className="delete-btn" onClick={() => onDelete(sub.id)}>DELETE</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TaskItem;
