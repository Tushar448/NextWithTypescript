import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Formik, Field, FormikHelpers, Form } from "formik";
import { TextField } from "formik-material-ui";

import {
  forgotPasswordActionCreator,
  forgotPasswordClearData
} from "../redux/action/forgotPassword";
import { forgotPassword } from "../../../common/component/Validation";
import { useTypedSelector } from "../../../common/hook/useTypedSelector";

interface ForgotPasswordProps {
  open: boolean;
  close: (data: boolean) => void;
}

interface ForgotPasswordFormValue {
  email: string;
}

const ValidationMessage = 
    {
        email: "Email is required",
        invalidEmail: "Please enter the valid email."
      }
export const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  open,
  close
}) => {
  const dispatch = useDispatch();
  const [isMailSendSuccessfully, setMailSendSuccessfully] = React.useState<boolean>(false)
  const { forgotPasswordData, isForgotPasswordError } = useTypedSelector(
    state => state.loginRoute.forgotPassword
  );
  const handleClose = () => {
    close(false);
  };

  useEffect(() => {
    if (forgotPasswordData) {
      setMailSendSuccessfully(true);
    }

    return () => {
      if (forgotPasswordData || isForgotPasswordError) {
        dispatch(forgotPasswordClearData());
      }
    };
  }, [forgotPasswordData, isForgotPasswordError]);

  const onSubmit = (
    formValues: ForgotPasswordFormValue,
    { setSubmitting, resetForm }: FormikHelpers<ForgotPasswordFormValue>
  ) => {
    dispatch(forgotPasswordActionCreator(formValues));
    resetForm();
    setSubmitting(false);
  };

  const handleSuccessClose = () => {
    setMailSendSuccessfully(false);
    close(false);

  }
  return (
    <>
     <Dialog
          onClose={handleSuccessClose}
          aria-labelledby="simple-dialog-title"
          open={isMailSendSuccessfully}
        >
          <DialogTitle id="alert-dialog-title">{"Detail"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Email Send Successfully to your registered email address.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSuccessClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      <Formik
        initialValues={{
          email: ""
        }}
        onSubmit={onSubmit}
        validationSchema={forgotPassword(
            ValidationMessage
        )}
      >
        {formikProps => {
          const { errors, touched, submitForm, resetForm } = formikProps;
          return (
            <Form>
              <Dialog open={open} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>
                  Forgot password
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To receive your password via email, please enter your email
                    address and click “Submit”. An email with the requested
                    information will arrive shortly.
                  </DialogContentText>
                  <Grid item xs={12}>
                    <Field
                      id='email'
                      name='email'
                      type='email'
                      label='Email'
                      variant='outlined'
                      fullWidth
                      component={TextField}
                      helperText={touched.email && errors.email}
                      className='custom'
                    />
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      handleClose();
                      resetForm();
                    }}
                    color='primary'
                  >
                    Cancel
                  </Button>
                  <Button onClick={submitForm} color='primary'>
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </Form>
          );
        }}
      </Formik>
      </>
  );
};
