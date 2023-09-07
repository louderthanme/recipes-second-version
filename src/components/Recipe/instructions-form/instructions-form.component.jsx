import { useFieldArray, Controller } from "react-hook-form";
import { IconButton, Box, Divider, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { StyledTextField } from "../../../utils/styledComponents";
import InstructionInput from "../instruction-input/instruction-input.component"

const InstructionsForm = ({ control, initialInstructions, errors }) => {
  const { fields: instructionFields, append: appendInstruction, remove: removeInstruction } = useFieldArray({
    control,
    name: "instructions",
    shouldUnregister: true,
  });

  return (
    <>
      <Typography variant="h5" fontWeight='bold'>Instructions</Typography>
      <Divider /> {/* Divider between the rows */}
      {/* Render IngredientInput for adding ingredients */}
      <InstructionInput control={control} errors={errors}/>
      {/* Render existing instructions */}
      {initialInstructions && initialInstructions.length > 0 && (
        instructionFields.map((item, index) => (
          <Box key={item.id} display="flex" alignItems="center">
            {/* Updated Box style */}
            <Box flexGrow={1} pr={2}>
              <Controller
                name={`instructions[${index}].step`}
                control={control}
                defaultValue={initialInstructions[index]?.step || ""}
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label="Instruction"
                    variant="filled"
                    fullWidth
                    margin="none"
                  />
                )}
              />
            </Box>
              <IconButton onClick={() => removeInstruction(index)} color="error">
              <DeleteOutline />
            </IconButton>
          </Box>
        ))
      )}
    </>
  );
}

export default InstructionsForm;
