import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Button, IconButton, Box } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { StyledTextField } from "../../utils/styledComponents";

const IngredientInput = ({ control, errors }) => {
  const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({
    control,
    name: "ingredients"
  });

  return (
    <>
      {ingredientFields.map((item, index) => (
        <Box key={item.id} display="flex" alignItems="center">
          <Box width="45%">
            <StyledTextField
              {...control.register(`ingredients[${index}].name`, { required: "This field is required" })}
              defaultValue={item.name}
              label='ingredient'
              variant="filled"
              fullWidth
              margin="normal"
              error={!!errors?.ingredients?.[index]?.name}
              helperText={errors?.ingredients?.[index]?.name?.message || ""}
             
            />
          </Box>
          <Box width="45%" marginLeft={2}>
            <StyledTextField
              {...control.register(`ingredients[${index}].quantity`, { required: "This field is required" })}
              defaultValue={item.quantity}
              label="quantity"
              variant="filled"
              fullWidth
              margin="normal"
              error={!!errors?.ingredients?.[index]?.quantity}
              helperText={errors?.ingredients?.[index]?.quantity?.message || ""} 
            />
          </Box>
          <IconButton onClick={() => removeIngredient(index)} color="error">
            <DeleteOutline />
          </IconButton>
        </Box>
      ))}
      <Button onClick={() => appendIngredient({ name: "", quantity: "" })}>Add Ingredient</Button>
    </>
  );
}

export default IngredientInput;
