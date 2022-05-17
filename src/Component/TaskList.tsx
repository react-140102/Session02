import { useState } from "react";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

//Before Hooks
//Class
//Dumb Component

//React Hook
//

export default function () {
  console.log("TaskList " + Math.random());
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "React hooks", done: true },
    { id: 1, title: "Ajax", done: false },
  ]);

  const toggleTask = (task: Task) => {
    task.done = !task.done;
    setTasks([...tasks]);
    // setTasks(tasks.slice());
  };

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li>
            <input type="checkbox" disabled checked={task.done} />
            <a onClick={() => toggleTask(task)}>{task.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
