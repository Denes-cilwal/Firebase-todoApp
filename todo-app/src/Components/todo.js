import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

export const Todo = (props) => {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={props.todo} secondary="DummyText" />
        </ListItem>
      </List>
    </div>
  );
};
