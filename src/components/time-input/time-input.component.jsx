import { useController } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { StyledTextField } from "../../utils/styledComponents";

const TimeInput = ({ control, name }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: "This field is required" }, 
    defaultValue: ["", ""] 
  });

  return (
    <Box display="flex" alignItems="center">
      <Box width="45%">
        <StyledTextField
          {...inputProps}
          inputRef={ref}
          label="Hours"
          type="number"
          variant="filled"
          fullWidth
          margin="none"
          error={!!error} 
          helperText={error?.message}
          value={inputProps.value[0]} // assign the first value in array to hours
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            inputProps.onChange([val, inputProps.value[1]]);
          }}
        />
      </Box>
      <Box width="45%" marginLeft={2}>
        <StyledTextField
          {...inputProps}
          inputRef={ref}
          label="Minutes"
          type="number"
          variant="filled"
          fullWidth
          margin="none"
          error={!!error} 
          helperText={error?.message}
          value={inputProps.value[1]} // assign the second value in array to minutes
          onChange={(e) => {
            const val = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
            inputProps.onChange([val, inputProps.value[1]]);
          }}
       />
      </Box>
    </Box>
  );
};

export default TimeInput;
