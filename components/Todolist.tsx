import React, { ChangeEvent, useState } from "react";

type TodoListProps = {

  taskName: string;
};

function Todolist() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  const handleTask = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = {taskName: task}
    setTodoList([...todoList, newTask])
    setTask("");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>My TodoList</h1>
      <input type="text" value={task} name='task' onChange={handleTask} placeholder="Enter your task..." className="border" />
      <button onClick={addTask}>Add Task</button>

      <div>
        {todoList.map((value) => {
          return (
            <h1>{value.taskName}</h1>
          )
        })}
      </div>
    </div>
  );
}

export default Todolist;
