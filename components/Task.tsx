import React from 'react'
import { TodoListProps } from './TodoListProps';

type Props = {
  task: TodoListProps;
}

const Task = ({task}: Props) => {
  return (
    <div>
      <p>{task.taskId}</p>
      <p>{task.taskName}</p>
      <button>Delete</button>
    </div>
  )
}

export default Task