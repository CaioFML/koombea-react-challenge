import './TaskForm.css';

function TaskForm() {
  return(
    <>
      <label className='form-label'>Task description:</label>
      <textarea id='task-description' name='task-description' className='form-input'></textarea>
      <button className='form-button'>Add task</button>
    </>
  )
}

export default TaskForm