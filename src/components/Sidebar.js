import CompletedTasks from './CompletedTasks';
import RemainingTasks from './RemainingTasks';
import './Sidebar.css';
import TaskForm from './TaskForm';

function Sidebar() {
  return(
    <div className="sidebar-background">
      <TaskForm />
      <RemainingTasks />
      <CompletedTasks />
    </div>
  )
}

export default Sidebar