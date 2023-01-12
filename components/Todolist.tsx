import React, { ChangeEvent, useState } from "react";
import Task from "./Task";
import { TodoListProps } from "./TodoListProps";
import { PlusCircleIcon, FolderIcon } from "@heroicons/react/outline";

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
      taskComplete: false,
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

  const handleCompleteTask = (id: number) => {
    const updateTodolist = todoList.map((task) => {
      if (task.taskId === id) {
        return {...task, taskComplete: true};
      } else {
        return task;
      }
    })
    setTodoList(updateTodolist);
  }

  return (
    <div className="bg-neutral-800 flex flex-col items-center w-full h-full border-2 border-white rounded-2xl shadow-2xl">

      <div className="flex flex-col items-center justify-center w-full rounded-t-2xl p-5">
        <div className="flex items-center gap-4 pb-5">
          <h1 className="text-3xl font-bold text-white shadow-black drop-shadow-2xl">
            My TodoList
          </h1>
          <FolderIcon className="h-8 mt-1 text-white" />
        </div>
        <div className="flex justify-center w-full gap-2">
          <input
            type="text"
            value={task}
            name="task"
            onChange={handleTask}
            placeholder="Enter your task..."
            maxLength={20}
            className="flex justify-center h-10 w-72 rounded-full p-2 outline-none"
          />
          <button onClick={addTask} className="bg-green-600 flex items-center gap-2 rounded-2xl px-2 text-white font-semibold border-green-700 border hover:bg-green-700" >
            <p className="hidden sm:flex">Add Task</p>
            <PlusCircleIcon className="h-6"/>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full overflow-auto">
        {todoList.map((task: TodoListProps, key: number) => {
          return (
            <div>
              <Task key={key} task={task} deleteTask={handleDelete} completeTask={handleCompleteTask} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todolist;
