import { v4 as uuidv4 } from "uuid";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Button, IconButton, Box } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { StyledTextField } from "../../utils/styledComponents";

const InstructionInput = ({ control, errors }) => {
  const { fields: instructionFields, append: appendInstruction, remove: removeInstruction } = useFieldArray({
    control,
    name: "instructions"
  });

  return (
    <>
      {instructionFields.map((item, index) => (
        <Box key={item.id} display="flex" alignItems="center">
          {/* Add flex-grow */}
          <Box flexGrow={1} pr={2}> 
            <StyledTextField
              {...control.register(`instructions[${index}].step`, { required: "This field is required" })}
              defaultValue={item.step}
              label={`Instruction ${index + 1}`} 
              variant="filled"
              fullWidth
              error={!!errors?.instructions?.[index]?.step}
              helperText={errors?.instructions?.[index]?.step?.message || ""}
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
};

export default InstructionInput;
