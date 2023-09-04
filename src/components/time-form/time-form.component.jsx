import { Typography, Box } from "@mui/material";
import TimeInput from "../time-input/time-input.component";

const TimeForm = ({ control, errors }) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">Time</Typography>
      <Box display="flex" alignItems="center">
        <Box flexGrow={1} width={"calc(45% - 8px)"}> {/* Subtracting 8px for margins */}
          <Typography variant="body1" fontWeight="bold">Prep</Typography>
            <TimeInput control={control} name="time.prep" />
        </Box>
        <Box flexGrow={1} width={"calc(45% - 8px)"} marginLeft={2}> {/* Subtracting 8px for margins */}
          <Typography variant="body1" fontWeight="bold">Cook</Typography>
            <TimeInput control={control} name="time.cook" />
        </Box>
      </Box>
    </Box>
  );
};


export default TimeForm;