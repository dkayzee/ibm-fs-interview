import React from "react";
import { hot } from "react-hot-loader/root";

import { Container, Grid } from "@material-ui/core";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import PriorityTaskList from "./components/PriorityTaskList";

class App extends React.Component {
  render() {
    return (
      <Container>
        {/* header with the new task form */}
        <Grid container justify="center">
          <TaskForm />
        </Grid>
        <Grid container justify="center">
          <Grid item xs={9}>
            <TaskList />
          </Grid>
          <Grid item xs={3}>
            <PriorityTaskList />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default hot(App);
