import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Grid, Paper, Box, FormControl, Typography, FormHelperText } from "@mui/material";
import { StyledTextField } from "../../utils/styledComponents";

const SignUpForm = ({ switchToSignIn, showSnackbar }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        showSnackbar("Signed up successfully", "success");
    };

    return (
        <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
            <Box p={3}>
                <Box marginBottom={3}>
                    <Typography variant="h3" fontWeight="bold">Sign Up</Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl error={errors.name ? true : false} fullWidth>
                        <StyledTextField 
                            {...register("name", { required: true })}
                            label="Display Name" 
                            variant="filled"
                            fullWidth
                        />
                        {errors.name && <FormHelperText>Name is required</FormHelperText>}
                    </FormControl>
                    <FormControl error={errors.email ? true : false} fullWidth>
                        <StyledTextField 
                            {...register("email", { required: true })}
                            label="Email" 
                            variant="filled" 
                            fullWidth 
                        />
                        {errors.email && <FormHelperText>Email is required</FormHelperText>}
                    </FormControl>
                    <FormControl error={errors.password ? true : false} fullWidth>
                        <StyledTextField 
                            {...register("password", { required: true })}
                            label="Password" 
                            variant="filled" 
                            type="password" 
                            fullWidth 
                        />
                        {errors.password && <FormHelperText>Password is required</FormHelperText>}
                    </FormControl>
                    <Grid container spacing={1} justifyContent="center" marginY={2}>
                        <Grid item xs={5}>
                            <Button type="submit" variant="contained" color="primary">
                                Sign Up with Email
                            </Button>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                            <Button variant="contained" color="primary">
                                Sign Up with Google
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography>Already have an account? <Button color="primary" onClick={switchToSignIn}>Sign In</Button></Typography>
                </form>
            </Box>
        </Paper>
    );
};

export default SignUpForm;
