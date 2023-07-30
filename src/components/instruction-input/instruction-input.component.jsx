import { v4 as uuidv4 } from "uuid";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Button, IconButton, Box } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { StyledTextField } from "../../utils/styledComponents";

const InstructionInput = ({ control }) => {
  const { fields: instructionFields, append: appendInstruction, remove: removeInstruction } = useFieldArray({
    control,
    name: "instructions"
  });

  return (
    <>
      {instructionFields.map((item, index) => (
        <Box key={item.id} display="flex" alignItems="center">
          <Box width="90%">
            <StyledTextField
              {...control.register(`instructions[${index}].step`)}
              defaultValue={item.step}
              label={`Instruction ${index + 1}`} 
              variant="filled"
              fullWidth
              margin="normal"
            />
          </Box>
          
          <IconButton onClick={() => removeInstruction(index)} color="error">
            <DeleteOutline />
          </IconButton>
        </Box>
      ))}
      <Button onClick={() => appendInstruction({ id: uuidv4(), step: "" })}>Add Instruction</Button>
    </>
  );
}

export default InstructionInput;