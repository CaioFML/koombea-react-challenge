import { useContext, useState } from 'react'
import './Tasks.css'
import { TaskContext } from './TasksContext'
import Timer from './Timer'

function Tasks() {
  const tasksContext = useContext(TaskContext)

  const changeTaskToComplete = (task) => {
    let taskId = task.key

    tasksContext.incrementCompletedTasks()
    tasksContext.decrementRemainingCount()

    tasksContext.setTasks(prevState => {
      return (prevState.map(task => {
        if (task.key === taskId) {
          return {...task, completed: true }
        }

        return task
      }))
    })
  }

  return(
    <div className='container'>
      {tasksContext.tasks.map(task => {
        return(
          <div className='tasks' key={task.key}>
            <p className={task.completed ? 'tasks-text-completed' : 'tasks-text'}>{task.description}</p>
            <button
            className={task.completed ? 'tasks-button-completed' : 'tasks-button'}
            onClick={() => changeTaskToComplete(task)}>
              {task.completed ? <Timer active={true} /> : 'Mark as complete'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Tasks