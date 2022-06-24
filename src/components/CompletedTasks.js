import { useContext } from 'react';
import './CompletedTasks.css';
import { TaskContext } from './TasksContext';

function CompletedTasks() {
  const tasksContext = useContext(TaskContext)

  return(
    <>
      <p className='completed-tasks-label'>Completed tasks</p>
      <p className='completed-tasks'>{tasksContext.completedCount}</p>
    </>
  )
}

export default CompletedTasks