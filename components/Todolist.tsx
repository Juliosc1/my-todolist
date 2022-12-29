import React, { ChangeEvent, useState } from "react";
import Task from "./Task";
import { TodoListProps } from "./TodoListProps";

function Todolist() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  const handleTask = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { taskName: task, taskId: todoList.length === 0 ? 1 : todoList[todoList.length - 1].taskId + 1 };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>My TodoList</h1>
      <input
        type="text"
        value={task}
        name="task"
        onChange={handleTask}
        placeholder="Enter your task..."
        className="border"
      />
      <button onClick={addTask}>Add Task</button>

      <div>
        {todoList.map((task: TodoListProps, key: number) => {
          return (
            <div>
              <Task key={key} task={task}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todolist;
