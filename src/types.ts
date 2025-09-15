export interface User {
  username: string;
  password: string;
}

export interface Task {
  id: number;
  task: string;
  parentId?: number;
}

export interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
  onAddSubtask: (subtask: string, parentID: number) => void;
}

export interface TaskItemProps {
  task: Task;
  subtasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
  onAddSubtask: (subtask: string, parentID: number) => void;
}