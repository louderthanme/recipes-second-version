import { Typography, Paper, FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

const RecipeUpload = () => {
    return(
        <Paper elevation={10} >
            <Typography variant="h3">Recipe Upload</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </Paper>
    )
};

export default RecipeUpload;
