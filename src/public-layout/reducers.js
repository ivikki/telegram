
// outsource dependencies

// local dependencies
import { reducer as signIn } from './sign-in/reducer';
import { reducer as signUp } from './sign-up/reducer';
import { reducer as forgotPassword } from './forgot-password/reducer';
import { reducer as changePassword } from './change-password/reducer';
import { reducer as emailConfirmation } from './email-confirmation/reducer';

export default {
    signIn,
    signUp,
    forgotPassword,
    changePassword,
    emailConfirmation,
};
