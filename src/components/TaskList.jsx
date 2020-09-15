import React, { useState } from "react";
import {
  List,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Task from "./Task";
import mockStore from "../../mockDataStore";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const TaskList = ({ setNewItem }) => {
  const classes = useStyles();
  const [filter, setFilter] = useState("none");

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={3}>
          {/* State controlled form for filtering task accordingly */}
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel>Filter By:</InputLabel>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <MenuItem value="none">All</MenuItem>
              <MenuItem value="upcoming">Upcoming</MenuItem>
              <MenuItem value="overdue">Overdue</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <List>
        {filter === "none"
          ? mockStore.map((each) => (
              <Task
                name={each.name}
                desc={each.desc}
                dueDate={each.dueDate}
                id={each.id}
                key={each.id}
                completed={each.completed}
                setNewItem={setNewItem}
              />
            ))
          : filter === "completed"
          ? mockStore
              .filter((each) => each.completed)
              .map((each) => (
                <Task
                  name={each.name}
                  desc={each.desc}
                  dueDate={each.dueDate}
                  id={each.id}
                  key={each.id}
                  completed={each.completed}
                  setNewItem={setNewItem}
                />
              ))
          : filter === "upcoming"
          ? mockStore
              .filter((each) => {
                // 3600000 milliseconds in a hour
                const diff =
                  Date.parse(each.dueDate) / 3600000 - Date.now() / 3600000;
                if (diff <= 23 && diff >= -23) return each;
              })
              .map((each) => (
                <Task
                  name={each.name}
                  desc={each.desc}
                  dueDate={each.dueDate}
                  id={each.id}
                  key={each.id}
                  completed={each.completed}
                  setNewItem={setNewItem}
                />
              ))
          : // last ternary is for overdue
            mockStore
              .filter((each) => {
                // 3600000 milliseconds in a hour
                const diff =
                  Date.parse(each.dueDate) / 3600000 - Date.now() / 3600000;
                if (diff <= -23 && !each.completed) return each;
              })
              .map((each) => (
                <Task
                  name={each.name}
                  desc={each.desc}
                  dueDate={each.dueDate}
                  id={each.id}
                  key={each.id}
                  completed={each.completed}
                  setNewItem={setNewItem}
                />
              ))}
      </List>
    </React.Fragment>
  );
};

export default TaskList;
