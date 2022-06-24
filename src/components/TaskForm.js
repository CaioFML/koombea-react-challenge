import { useContext, useRef } from 'react';
import './TaskForm.css';
import { TaskContext } from './TasksContext';

function TaskForm() {
  const taskContext = useContext(TaskContext)
  const input = useRef()

  const addTask = (event) => {
    event.preventDefault()

    const input_value = input.current.value

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

    input.current.value = ''
  }

  return(
    <>
      <form onSubmit={addTask}>
        <label className='form-label'>Task description:</label>
        <textarea id='task-description' name='task-description' className='form-input' ref={input}></textarea>
        <button className='form-button' type='submit'>Add task</button>
      </form>
    </>
  )
}

export default TaskForm