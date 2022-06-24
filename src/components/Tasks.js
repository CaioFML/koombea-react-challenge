import { useContext, useState } from 'react'
import './Tasks.css'
import { TaskContext } from './TasksContext'
import Timer from './Timer'

function Tasks() {
  const initialTasks = [
    { key: '1', description: 'Label SAHUHUF ASUHFji ISJFIAFJASINAF', completed: false },
    { key: '2', description: 'Label', completed: false },
    { key: '3', description: 'Lorem ipsum', completed: false }
  ]

  const [tasks, setTasks] = useState(initialTasks)
  const [completedTasks, setCompletedTasks] = useState(0)

  const tasksContext = useContext(TaskContext)

  const incrementCompletedTasks = () => setCompletedTasks(prevState => {
    let new_countage = prevState + 1

    tasksContext.setCompletedCount(new_countage)

    return new_countage
  })

  const changeTaskToComplete = (task) => {
    let taskId = task.key

    incrementCompletedTasks()

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
      {tasks.map(task => {
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