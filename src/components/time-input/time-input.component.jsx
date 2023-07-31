import { Controller } from "react-hook-form";
import { Box } from "@mui/material";
import { StyledTextField } from "../../utils/styledComponents";

const TimeInput = ({ control, name }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="45%">
        <Controller
          name={`${name}[0]`}
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="Hours"
              type="number"
              variant="filled"
              fullWidth
              margin="none"
            />
          )}
        />
      </Box>
      <Box width="45%" marginLeft={2}>
        <Controller
          name={`${name}[1]`}
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="Minutes"
              type="number"
              variant="filled"
              fullWidth
              margin="none"
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default TimeInput;
