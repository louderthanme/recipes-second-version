import { StyledTextField } from "../../utils/styledComponents";
import { FormControl } from "@mui/material";

const TitleForm = ({ control, errors }) => {
  return (
    <FormControl fullWidth>
      <StyledTextField
        {...control.register("title", { required: "Title is required" })}
        label="Recipe Title"
        variant="filled"
        fullWidth
        margin="normal"
        autoFocus
        error={!!errors.title}
        helperText={errors.title?.message || ""}
      />
    </FormControl>
  );
};

export default TitleForm;
