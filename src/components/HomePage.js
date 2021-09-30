import { useHistory } from 'react-router-dom'

function HomePage(props) {

    const history = useHistory()

    function handleClick() {
        history.push("/tasks")
    }

    return (
        <div>
        <h1>Welcome to Your Task List</h1>
        <button onClick={ handleClick }>Click Me to Go To Your List!</button>
        </div>
    )
}

export default HomePage