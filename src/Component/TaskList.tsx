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
//1. react componetns
//2. level asli component
//3. exception: custome hooks

export default function () {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "React hooks", done: true },
    { id: 2, title: "Ajax", done: false },
  ]);

  const toggleTask = (task: Task) => {
    task.done = !task.done;
    setTasks([...tasks]);
    // setTasks(tasks.slice());
  };

  let textVal = "salam";

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              onChange={(e) => toggleTask(task)}
              type="checkbox"
              checked={task.done}
            />
            <a>{task.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
