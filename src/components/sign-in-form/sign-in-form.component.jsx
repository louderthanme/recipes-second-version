import React from 'react';
import { useForm } from "react-hook-form";
import { TextField,Button, FormControl,FormHelperText } from '@mui/material';

const SignIn = ({switchToSignUp, showSnackbar}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        showSnackbar("Signed in successfully", "success");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign In</h2>
            <FormControl error={errors.email ? true : false}>
                <TextField 
                    {...register("email", { required: true })}
                    label="Email" 
                    variant="outlined" 
                />
                {errors.email && <FormHelperText>Email is required</FormHelperText>}
            </FormControl>
            <FormControl error={errors.password ? true : false}>
                <TextField 
                    {...register("password", { required: true })}
                    label="Password" 
                    variant="outlined" 
                    type="password" 
                />
                {errors.password && <FormHelperText>Password is required</FormHelperText>}
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Sign In with Email
            </Button>
            <Button variant="contained" color="primary">
                Sign In with Google
            </Button>
            <p>Don't have an account? <Button color="primary" onClick={switchToSignUp}>Sign Up</Button></p>
        </form>
    );
};

export default SignIn;