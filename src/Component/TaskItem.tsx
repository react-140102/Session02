import {memo} from 'react';
import { Task } from "./Task";

interface TaskItemProps {
  task: Task;
  toggleTask: any;
}

export const function TaskItem({ task, toggleTask }: TaskItemProps) {
  console.log(task);

  return (
    <li>
      <input
        onChange={(e) => toggleTask(task)}
        type="checkbox"
        checked={task.done}
      />
      <a>{task.title}</a>
    </li>
  );
}
