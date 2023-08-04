import React, {useState} from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SnackbarFormMessage from '../../components/snackbar-form-message/snackbar-form-message.component';

import { useSnackbar } from '../../hooks/useSnackbar';


const AuthPage = () => {
    const [showSignUp, setShowSignUp] = useState(false);

    const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();

    const switchToSignUp = () => setShowSignUp(true);
    const switchToSignIn = () => setShowSignUp(false);

    return (
        <>
            {showSignUp ? <SignUpForm switchToSignIn={switchToSignIn} showSnackBar={showSnackbar} /> 
            : <SignInForm switchToSignUp={switchToSignUp} showSnackBar={showSnackbar} />}
            <SnackbarFormMessage 
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                position={{ vertical: 'top', horizontal: 'center' }}
                onClose={hideSnackbar}
            />
        
        </>
    );
};

export default AuthPage;
