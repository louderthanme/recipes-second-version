import React, { useState } from 'react';

import SignInForm from '../../components/Authentication/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/Authentication/sign-up-form/sign-up-form.component';
import SnackbarFormMessage from '../../components/ui/snackbar-form-message/snackbar-form-message.component';

import { useSnackbar } from '../../hooks/useSnackbar';

import Box from '@mui/material/Box';

const AuthPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();

  const switchToSignUp = () => setShowSignUp(true);
  const switchToSignIn = () => setShowSignUp(false);

  return (
    <Box display="flex" justifyContent="center">
      <Box width="400px">
        {showSignUp ? (
          <SignUpForm switchToSignIn={switchToSignIn} showSnackbar={showSnackbar} />
        ) : (
          <SignInForm switchToSignUp={switchToSignUp} showSnackbar={showSnackbar} />
        )}
      </Box>

      <SnackbarFormMessage
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        position={{ vertical: 'top', horizontal: 'center' }}
        onClose={hideSnackbar}
      />
    </Box>
  );
};

export default AuthPage;
