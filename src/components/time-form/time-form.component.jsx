import { FormControl, Typography, Divider} from "@mui/material";
import TimeInput from "../time-input/time-input.component";
import { StyledDivider } from "../../utils/styledComponents";

const TimeForm = ({ control, errors, time }) => {
  const { control: prepControl, name: prepName } = time.prep;
  const { control: cookControl, name: cookName } = time.cook;

  return (
    <FormControl fullWidth>
      <Typography variant="h5" fontWeight="bold">Time</Typography>
      <Typography variant="body1" fontWeight="bold">Prep</Typography>
      <TimeInput control={prepControl} name={prepName} />
      <Typography variant="body1" fontWeight="bold">Cooking</Typography>
      <TimeInput control={cookControl} name={cookName} />
    </FormControl>
  );
};

export default TimeForm;
