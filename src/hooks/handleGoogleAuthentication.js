import { signInWithGoogle } from "../utils/firebase-utils";


        const handleGoogleAuthentication = (showSnackbar, successMessage, errorMessage) => async (setUser) => {
    try {
        const { user } = await signInWithGoogle();
        setUser(user);
        console.log(user);
        showSnackbar(successMessage, "success");
    } catch (err) {
        showSnackbar(errorMessage, "error");
        console.error(err);
    }
};

export { handleGoogleAuthentication };
