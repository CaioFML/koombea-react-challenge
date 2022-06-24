import { useContext } from 'react';
import './RemainingTasks.css';
import { TaskContext } from './TasksContext';

function RemainingTasks() {
  const tasksContext = useContext(TaskContext)

  return(
    <>
      <p className='remaining-tasks-label'>Remaining tasks</p>
      <p className='remaining-tasks'>{tasksContext.remainingCount}</p>
    </>
  )
}

export default RemainingTasks