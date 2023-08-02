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
    defaultValue: [0, 0], // This will initialize the value as [0, 0]
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
          value={inputProps.value[0]} // First element is hours
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            inputProps.onChange([val, inputProps.value[1]]); // Update hours, keep minutes same
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
          value={inputProps.value[1]} // Second element is minutes
          onChange={(e) => {
            const val = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
            inputProps.onChange([inputProps.value[0], val]); // Update minutes, keep hours same
          }}
        />
      </Box>
    </Box>
  );
};

export default TimeInput;
