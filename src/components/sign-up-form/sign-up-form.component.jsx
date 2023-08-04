import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button, FormControl, FormHelperText } from '@mui/material';


const SignUpForm = ({switchToSignIn, showSnackbar}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        showSnackbar("Signed up successfully", "success");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign Up</h2>
            <FormControl error={errors.name ? true : false}>
                <TextField 
                    {...register("name", { required: true })}
                    label="Display Name" 
                    variant="outlined" 
                />
                {errors.name && <p>Name is required</p>}
            </FormControl>
            <FormControl error={errors.email ? true : false}>
                <TextField 
                    {...register("email", { required: true })}
                    label="Email" 
                    variant="outlined" 
                />
                {errors.email && <p>Email is required</p>}
            </FormControl>	
            <FormControl error={errors.password ? true : false}>
                <TextField 
                    {...register("password", { required: true })}
                    label="Password" 
                    variant="outlined" 
                    type="password" 
                />
                {errors.password && <p>Password is required</p>}
            </FormControl>

            <Button type="submit" variant="contained" color="primary">
                Sign Up with Email
            </Button>
            <Button variant="contained" color="primary">
                Sign Up with Google
            </Button>
            <p>Already have an account? <Button color="primary" onClick={switchToSignIn}>Sign In</Button></p>
        </form>
    );
};

export default SignUpForm;
