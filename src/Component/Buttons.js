import React from "react";
import { Button } from "@mui/material";
function Buttons(props) {
  return (
    <div>
      <Button
        variant="outlined"
        className="me-2"
        onClick={() => props.additems()}
      >
        Add
      </Button>
      <Button variant="outlined" onClick={() => props.removeall()}>
        Clear All
      </Button>
    </div>
  );
}
export default Buttons;
