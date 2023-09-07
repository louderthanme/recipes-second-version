import { useController, Controller } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { StyledTextField } from "../../../utils/styledComponents";

const TimeInput = ({ control, name }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: "This field is required" },
    defaultValue: [0, 0],
  });

  const [hours, minutes] = inputProps.value || [0, 0];

  return (
    <Box display="flex" alignItems="center">
      <Box flexGrow={1} width={"calc(45% - 8px)"}> {/* Subtracting 8px for margins */}
        <Controller
          name={`${name}.hours`}
          control={control}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="Hours"
              type="number"
              variant="filled"
              fullWidth
              margin="normal"
              value={hours !== 0 ? hours : ""}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                inputProps.onChange([val || 0, minutes]);
              }}
            />
          )}
        />
      </Box>
      <Box flexGrow={1} width={"calc(45% - 8px)"} marginLeft={2}> {/* Subtracting 8px for margins */}
        <Controller
          name={`${name}.minutes`}
          control={control}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="Minutes"
              type="number"
              variant="filled"
              fullWidth
              margin="normal"
              value={minutes !== 0 ? minutes : ""}
              onChange={(e) => {
                const val = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
                inputProps.onChange([hours, val || 0]);
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default TimeInput;
