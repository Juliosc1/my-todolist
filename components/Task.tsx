import React from 'react'
import { TodoListProps } from './TodoListProps';

type Props = {
  task: TodoListProps;
}

const Task = ({task}: Props) => {
  return (
    <div className='bg-green-200 flex items-center h-20 p-5 mx-2 mt-3 border rounded-2xl transition ease-in-out delay-150 hover:bg-green-300 hover:-translate-y-1 hover:scale-100'>
      <div className='flex justify-start w-4/5'>
        <p className='font-semibold pr-2 hover:'>{task.taskId}.</p>
        <p className='font-semibold'>{task.taskName}</p>
      </div>
      <div className='flex justify-end w-20'>
        <button className='bg-red-400 rounded-xl h-8 w-16 text-white hover:bg-red-500'>Delete</button>
      </div>
    </div>
  )
}

export default Task