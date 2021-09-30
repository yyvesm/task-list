import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Task from './components/Task';
import TaskList from './components/TaskList';
import HomePage from './components/HomePage';
import EditTask from './components/EditTask';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))
  }, [])


  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/tasks/edit">
            <EditTask tasks={tasks} />
          </Route>

          <Route path="/tasks">
            <TaskList tasks={tasks} />
          </Route>

          <Route path="/tasks/:id">
            <Task tasks={tasks} />
          </Route> 

        </Switch>
      </Router>

    </div>
  );
}

export default App;