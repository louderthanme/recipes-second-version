import { FormControl, Typography, Divider} from "@mui/material";
import TimeInput from "../time-input/time-input.component";
import { StyledDivider } from "../../utils/styledComponents";

const TimeForm = ({ control }) => {
  return (
    <FormControl fullWidth>
      <Typography variant="h5" fontWeight="bold">Time</Typography>
      <StyledDivider />
      <Typography variant="body1" fontWeight="bold">Prep</Typography>
      <TimeInput control={control} name="time.prep" />
      <Typography variant="body1" fontWeight="bold">Cooking</Typography>
      <TimeInput control={control} name="time.cook" />
    </FormControl>
  );
};

export default TimeForm;
