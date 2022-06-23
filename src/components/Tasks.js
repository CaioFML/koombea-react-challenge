import { useState } from 'react'
import './Tasks.css'

function Tasks() {
  const [tasks, setTasks] = useState(
    [
      { key: '1', description: 'Label SAHUHUF ASUHFji ISJFIAFJASINAF', completed: false ,completedAt: null },
      { key: '2', description: 'Label', completed: false, completedAt: null },
      { key: '3', description: 'Lorem ipsum', completed: false, completedAt: null }
    ]
  )

  const changeTaskToComplete = (task) => {
    let taskId = task.key

    setTasks(prevState => {
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
      {console.log(tasks)}
      {tasks.map(task => {
        return(
          <div className='tasks' key={task.key}>
            <p className={task.completed ? 'tasks-text-completed' : 'tasks-text'}>{task.description}</p>
            <button
            className={task.completed ? 'tasks-button-completed' : 'tasks-button'}
            onClick={() => changeTaskToComplete(task)}>
              {task.completed ? 'Completed at ...' : 'Mark as complete'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Tasks