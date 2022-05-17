import { useState } from "react";
import { Task } from "./Task";
import { TaskItem } from "./TaskItem";

//Before Hooks
//Class
//Dumb Component

//React Hook
//1. react componetns
//2. level asli component
//3. exception: custome hooks

export default function () {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "React hooks", done: true },
    { id: 2, title: "Ajax", done: false },
  ]);

  const toggleTask = (task: Task) => {
    task.done = !task.done;
    setTasks([...tasks]);
    // setTasks(tasks.slice());
  };

  const addTask = () => {
    let newtasks = [...tasks];
    newtasks.push({
      id: Math.random(),
      title,
      done: false,
    });
    setTasks(newtasks);
    setTitle("");

    //Batch

    // tasks.push({
    //   id: Math.random(),
    //   title,
    //   done: false,
    // });
    // setTasks(tasks);
  };

  return (
    <>
      New Task:
      <input onChange={(e) => setTitle(e.target.value)} value={title} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
          ></TaskItem>
        ))}
      </ul>
    </>
  );
}
