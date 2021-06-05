import React from "react";
import { Grid, Button, Box } from "@material-ui/core";
import { Formik, Field, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { Autocomplete } from "@material-ui/lab";

import { LoginLayout } from "../../../common/component/layout";
import {registrationSchema} from '../../../common/component/Validation';
import { useTypedSelector } from "../../../common/hook/useTypedSelector";
import {fetchRegistrationActionCreator, clearRegistrationData} from '../redux/action/registrationAction';

import {RoleResult} from '../RoleResult';

interface RegistrationProps {
    roleData: RoleResult[]
}

interface FormValues {
    name: string;
    email: string;
    password: string;
    role: any;
}

const validationMessage = {
    name: "Name is Required",
    password: "Password is Required",
    email: "Password is Required",
    role: "Role is required",
    invalidEmail: "Please enter the valid email"
  };

export const Registration:React.FC<RegistrationProps> = ({roleData}) => {
    const dispatch =useDispatch()
    const {registrationData} = useTypedSelector(state => state.signUpRoute.registrationState)

    React.useEffect(() => {
        if(registrationData && registrationData.message) {
            Router.push("/login")
        } return () => {
            if(registrationData) {
                dispatch(clearRegistrationData())
            }
        }
    }, [registrationData])
    const onSubmit = (
        formValues: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
      ) => {
        dispatch(fetchRegistrationActionCreator(formValues));
        setSubmitting(false);
      };

    return (
    <LoginLayout title="SignUp">
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          role: ""
        }}
        onSubmit={onSubmit}
        validationSchema={registrationSchema(validationMessage)}
      >
        {formikProps => {
          const { errors, touched, submitForm, setFieldValue} = formikProps;
          return (
            <>
              <Box>
                <Grid item xs={6}>
                  <Field
                    id="username"
                    name="name"
                    type="text"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    component={TextField}
                    helperText={touched.name && errors.name}
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
              <Box mt={2}>
              <Grid item xs={6}>
                <Field
                  id='email'
                  name='email'
                  type='email'
                  label='Email'
                  variant='outlined'
                  fullWidth
                  component={TextField}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              </Box>
              <Box mt={2}>
              <Grid item xs={6}>
                  <Autocomplete
                    id='role'
                    options={roleData}
                    getOptionLabel={(option) => option.name}
                    onChange={(_, value) => {
                      setFieldValue(
                        "role",
                        value === null ? "" : `${value.name}`
                      );
                    }}
                    renderInput={(params) => (
                      <Field
                        component={TextField}
                        {...params}
                        label='Role'
                        name='role'
                        variant='outlined'
                        fullWidth
                        helperText={touched.role && errors.role}
                      ></Field>
                    )}
                  />
                </Grid>
                </Box>
              <Box display="flex">

              <Grid item xs={1}>
                <Button
                  variant="text"
                  color="primary"
                  className="fullWidth"
                  onClick={submitForm}
                >
                  Sign In
                </Button>
              </Grid>
              </Box>
            </>
          );
        }}
      </Formik>
</>
</LoginLayout>
    )
}