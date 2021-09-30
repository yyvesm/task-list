import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/tasks/list">
            <TaskList />
          </Route>
          
          <Route path="/tasks/:id">
            <Task />
          </Route> 


        </Switch>
      </Router>

    </div>
  );
}

export default App;
