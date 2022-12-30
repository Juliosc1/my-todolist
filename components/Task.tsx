import React from 'react'
import { TodoListProps } from './TodoListProps';
import { TrashIcon, CheckIcon } from '@heroicons/react/outline';

type Props = {
  task: TodoListProps;
  deleteTask(taskIdToDelete: number):void;
  completeTask(taskIdToComplete: number): void;
}

const Task = ({task, deleteTask, completeTask}: Props) => {
  return (
    <div className={task.taskComplete ? 'taskCard line-through' : 'taskCard'}>
      <div className='flex justify-start w-4/5'>
        <p className='font-semibold pr-2 hover:'>{task.taskId}.</p>
        <p className='font-semibold'>{task.taskName}</p>
      </div>
      <div className='flex justify-end w-1/5 gap-4'>
        <button onClick={() => completeTask(task.taskId)} className="bg-green-400 rounded-xl h-8 w-auto px-2 text-white hover:bg-green-500">
          <CheckIcon className='h-6' />
        </button>
        <button onClick={() => deleteTask(task.taskId)} className='bg-red-400 rounded-xl h-8 w-auto px-2 text-white hover:bg-red-500'>
          <TrashIcon className="h-6" />
        </button>
      </div>
    </div>
  )
}

export default Task