import { createContext, useState } from 'react'

export const TaskContext = createContext({
  completedCount: 0,
  remainingCount: 0,
  tasks: [],
  setTasks: () => {},
  setCompletedCount: () => {},
  setRemainingCount: () => {}
})

const TaskProvider = ({ children }) => {
  const [completedCount, setCompletedCount] = useState(0)
  const [remainingCount, setRemainingCount] = useState(0)
  const [tasks, setTasks] = useState([])

  return (
    <>
      <TaskContext.Provider value={{ completedCount, remainingCount, tasks, setTasks, setCompletedCount, setRemainingCount }}>
        {children}
      </TaskContext.Provider>
    </>
  )
}

export default TaskProvider