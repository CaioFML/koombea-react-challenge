import './App.css';
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';
import ThemeProvider from './components/TasksContext';

function App() {
  return (
    <ThemeProvider>
      <Sidebar />
      <Tasks />
    </ThemeProvider>
  );
}

export default App;
