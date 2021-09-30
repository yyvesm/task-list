import { useHistory } from 'react-router-dom'
import TaskSummary from './TaskSummary'

function EditTask({tasks}) {

    const history = useHistory()

    function handleClick() {
        history.push("/tasks")
    }

    const mappedTask = tasks.map(task => <TaskSummary key={task.id} task={task} />)

    return (
        <div>
        <h1>Edit Tasks</h1>
        <input></input>
        <p> {mappedTask}    <button >Delete</button></p>
        <button onClick={ handleClick }>Done</button>
        </div>
    )
}

export default EditTask