import React from "react";
import { Grid, Button, Box } from "@material-ui/core";
import { Formik, Field, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import Router from "next/router";
import { useDispatch } from "react-redux";

import { LoginLayout } from "../../common/component/layout";
import { loginSchema } from "../../common/component/Validation";
import { useTypedSelector } from "../../common/hook/useTypedSelector";
import {fetchTokenActionCreator, clearTokenData} from './redux/action/loginaction';
import {ForgotPassword} from './ForgotPassword';
export interface LoginFormValues {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState(false);
  const dispatch = useDispatch();
  const {token} = useTypedSelector(state => state.loginRoute.tokenState)
  const validationMessage = {
    username: "Email is Required",
    password: "Password is Required"
  };

React.useEffect(() => {
  if(token) {
    Router.push("/brand");
  }
  return ()  => {
    if(token) {
      dispatch(clearTokenData())
    }
  }
}, [token])
  const onSubmit = (
    formValues: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    dispatch(fetchTokenActionCreator(formValues))
    setSubmitting(false);
  };

  return (
    <LoginLayout title="Login">
    <>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={onSubmit}
        validationSchema={loginSchema(validationMessage)}
      >
        {formikProps => {
          const { errors, touched, submitForm } = formikProps;
          return (
            <>
              <Box>
                <Grid item xs={6}>
                  <Field
                    id="username"
                    name="username"
                    type="username"
                    label="Ussername"
                    variant="outlined"
                    fullWidth
                    component={TextField}
                    helperText={touched.username && errors.username}
                  />
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid item xs={6}>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    component={TextField}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
              </Box>
              <Grid item xs={12}>
                <Button
                  variant="text"
                  color="primary"
                  className="fullWidth"
                  onClick={submitForm}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Box mt={1}>
                  
                    <a onClick={() => setForgotPasswordOpen(true)}>FORGOT YOUR PASSWORD?</a>
                </Box>
              </Grid>
            </>
          );
        }}
      </Formik>
      <ForgotPassword
          open={forgotPasswordOpen}
          close={setForgotPasswordOpen}
        />
        </>
    </LoginLayout>
  );
};
