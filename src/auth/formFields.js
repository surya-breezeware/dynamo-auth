const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
      isRequired: false,
      // order: 1,
    },
  },
  signUp: {
    phone_number: {
      label: 'Phone Number:',
      placeholder: 'Enter your Phone Number',
      isRequired: false,
      // order: 4,
    },
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password',
      isRequired: true,
      // order: 2,
    },
    confirm_password: {
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
      isRequired: true,
      // order: 3,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

export default formFields;
