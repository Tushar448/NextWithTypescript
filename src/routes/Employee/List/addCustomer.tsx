import React from 'react';
import {
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box
  } from "@material-ui/core";
  import { Formik, Field, FormikHelpers } from "formik";
  import { TextField } from "formik-material-ui";
  import { Autocomplete } from "@material-ui/lab";

  import {RoleResult} from '../../SignUp/RoleResult';
  import {registrationSchema} from '../../../common/component/Validation';

  interface AddCustomerProps {
    open: boolean;
    setOpen: (data: boolean) => void;
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
export const AddCustomer:React.FC<AddCustomerProps> = ({open, setOpen, roleData}) => {

    const handleClose = () => {
        setOpen(false);
      };

      const onSubmit = (
        formValues: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
      ) => {
        setSubmitting(false);
      };
    return (
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
        <Dialog
          onClose={handleClose}
          aria-labelledby="simple-dialog-title"
          open={open}
        >
          <DialogTitle id="alert-dialog-title">Add Employee</DialogTitle>
          <DialogContent>
          
              <Box display="flex" flexDirection="row" p={1} m={1}>
                  <Box>
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
                  </Box>
                  <Box ml={2}>
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
                  </Box>
              </Box>
              <Box display="flex" flexDirection="row" p={1} m={1}>
              <Box>
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
              </Box>
              
              <Box ml={2}>
                  <Autocomplete
                    id='role'
                    options={roleData || []}
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
                        helperText={touched.role && errors.role}
                      ></Field>
                    )}
                  />
                </Box>
                </Box>
              </DialogContent>
          <DialogActions>
          <Button
                  onClick={submitForm}
                >
                  SUbmit
                </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
            </>
          );
        }}
     
          
         </Formik>
    )
}