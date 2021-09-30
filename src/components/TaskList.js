import { useHistory } from 'react-router-dom'
import TaskSummary from './TaskSummary'

function TaskList({tasks}) {

    const history = useHistory()

   function handleClick() {
        history.push(`/tasks/edit`)
    } 

    function handleClick2() {
        history.push(`/`)
    } 

    const mappedTask = tasks.map(task => <TaskSummary key={task.id} task={task} />)

    return (
        <div>
        <button onClick={ handleClick2 }>Go Back to Home Page</button>
        <h1>My Tasks</h1>
        <>{mappedTask}</>
        <button onClick={ handleClick }>Edit Tasks</button>
        </div>
        )
}

export default TaskList