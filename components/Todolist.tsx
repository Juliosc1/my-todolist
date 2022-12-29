import React, { ChangeEvent, useState } from "react";

type todolist = {
  id: number;
  task: string;
};

function Todolist(props: todolist) {
  const [task, setTask] = useState<string>("");

  const handleTask = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>My TodoList</h1>
      <input type="text" value={task} onChange={handleTask} placeholder="Enter your task..." className="border" />
      <button>Add Task</button>
    </div>
  );
}

export default Todolist;
