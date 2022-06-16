import './Tasks.css'

function Tasks() {
  return(
    <div className='container'>
      <div className='tasks'>
        <p className='tasks-text'>Label SAHUHUF ASUHFji ISJFIAFJASINAF</p>
        <button className='tasks-button'>Mark as complete</button>
      </div>

      <div className='tasks'>
        <p className='tasks-text'>Label</p>
        <button className='tasks-button'>Mark as complete</button>
      </div>

      <div className='tasks'>
        <p className='tasks-text-completed'>Label ASHUFAS HUASFH HAUFHSUA FUSAF HU</p>
        <button className='tasks-button-completed'>Completed 5s ago</button>
      </div>
    </div>
  )
}

export default Tasks