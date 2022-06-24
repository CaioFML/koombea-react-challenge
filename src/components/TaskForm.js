import { useContext, useRef } from 'react';
import './TaskForm.css';
import { TaskContext } from './TasksContext';

function TaskForm() {
  const taskContext = useContext(TaskContext)
  const input = useRef()

  const addTask = (input_value) => {
    taskContext.setTasks(prevState => {
      return(
        [
          ...prevState,
          {
            key: Math.floor(Math.random() * 1000),
            description: input_value,
            completed: false
          }
        ]
      )
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    addTask(input.current.value)
    taskContext.incrementRemainingCount()

    input.current.value = ''
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label className='form-label'>Task description:</label>
        <textarea id='task-description' name='task-description' className='form-input' ref={input}></textarea>
        <button className='form-button' type='submit'>Add task</button>
      </form>
    </>
  )
}

export default TaskForm