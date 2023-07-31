import { FormControl, Typography } from "@mui/material";
import TimeInput from "../time-input/time-input.component";

const TimeForm = ({ control }) => {
  return (
    <FormControl fullWidth>
      <Typography variant="h5" fontWeight="bold">Time</Typography>
      <Typography variant="body1" fontWeight="bold">Prep</Typography>
      <TimeInput control={control} name="time.prep" />
      <Typography variant="body1" fontWeight="bold">Cooking</Typography>
      <TimeInput control={control} name="time.cook" />
    </FormControl>
  );
};

export default TimeForm;
