import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";

import { Container, Grid } from "@material-ui/core";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  // this state is needed in order to re-render TaskList with new tasks created from TaskForm
  const [newItem, setNewItem] = useState(false);

  // Effect hook which updates the whole App when state "newItem" is updated which is triggered by the submission of a new task in TaskForm
  useEffect(() => {
    setNewItem(false);
  }, [newItem]);

  return (
    <Container>
      <Grid container justify="center">
        <TaskForm setNewItem={setNewItem} />
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12}>
          <TaskList setNewItem={setNewItem} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default hot(App);
