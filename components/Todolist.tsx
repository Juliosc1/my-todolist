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
    const newTask = {
      taskName: task,
      taskId:
        todoList.length === 0 ? 1 : todoList[todoList.length - 1].taskId + 1,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const handleDelete = (taskIdToDelete: number) => {
    const newTodoList = todoList.filter((task) => {
      return task.taskId !==taskIdToDelete;
    })
    setTodoList(newTodoList);
  }

  return (
    <div className="bg-green-400 flex flex-col items-center w-1/2 h-full border-2 border-green-200 rounded-2xl shadow-2xl">

      <div className="bg-green-500 flex flex-col items-center justify-center w-full rounded-t-2xl p-5">
        <h1 className="text-2xl font-bold pb-5 text-white shadow-black drop-shadow-2xl">
          My TodoList
        </h1>
        <div className="flex gap-2">
          <input
            type="text"
            value={task}
            name="task"
            onChange={handleTask}
            placeholder="Enter your task..."
            className="flex justify-center h-10 w-80 rounded-full p-2 outline-none"
          />
          <button onClick={addTask} className="bg-green-600 rounded-2xl px-2 text-white font-semibold border-green-700 border hover:bg-green-700" >Add Task</button>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {todoList.map((task: TodoListProps, key: number) => {
          return (
            <div className="">
              <Task key={key} task={task} deleteTask={handleDelete}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todolist;
