import React from "react";
import { StyledTextField } from "../../utils/styledComponents";
import { FormControl } from "@mui/material";

const TitleForm = ({ control }) => {
  return (
    <FormControl fullWidth>
      <StyledTextField
        {...control.register("title")}
        label="Recipe Title"
        variant="filled"
        fullWidth
        margin="normal"
        autoFocus
      />
    </FormControl>
  );
};

export default TitleForm;
