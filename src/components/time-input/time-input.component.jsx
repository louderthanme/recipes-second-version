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
    defaultValue: null,
  });

  const [hours, minutes] = inputProps.value || [0, 0];

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
          value={hours !== 0 ? hours : ""} // If hours are not 0, show hours, else show an empty string
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            inputProps.onChange([val || 0, minutes]); // Update hours, keep minutes same
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
          value={minutes !== 0 ? minutes : ""} // If minutes are not 0, show minutes, else show an empty string
          onChange={(e) => {
            const val = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
            inputProps.onChange([hours, val || 0]); // Update minutes, keep hours same
          }}
        />
      </Box>
    </Box>
  );
};

export default TimeInput;
