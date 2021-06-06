import React, {useState, useEffect} from 'react';
import {
    Radio,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    FormControlLabel,
  FormHelperText,
  } from "@material-ui/core";
  import { Formik, Field, FormikHelpers } from "formik";
  import { TextField } from "formik-material-ui";
  import { Autocomplete } from "@material-ui/lab";
  import { RadioGroup } from "formik-material-ui";
  import { useDispatch } from "react-redux";

  import {RoleResult} from '../../SignUp/RoleResult';
  import {addEmployeeSchema} from '../../../common/component/Validation';
  import {EmployeeListResult} from '../EmployeeListResult';
import {addEmployeeActionCreator, clearEmployeeAddData} from '../redux/action/addEmployeeAction';
import { AlertDialog } from "../../../common/component/AlertDialog";
import { useTypedSelector } from "../../../common/hook/useTypedSelector";

  interface AddCustomerProps {
    open: boolean;
    setOpen: (data: boolean) => void;
    roleData?: RoleResult[];
    viewData?: EmployeeListResult
  }

  interface FormValues {
    name: string;
    email: string;
    code: string;
    role: any;
    gender: string;
    doj: string
    dob: string
    salary: string;
}

const validationMessage = {
    name: "Name is Required",
    code: "Code is Required",
    email: "Email is Required",
    role: "Role is required",
    invalidEmail: "Please enter the valid email",
    gender: "Gender is required.",
    alphanemeric: "Please enter alphnemric character only.",
    dob: "DOB is required",
    doj: "DOJ is required",
    salary: "DOJ is required",
    alphabetical: "Please enter only alphabetic word"
  };
export const AddCustomer:React.FC<AddCustomerProps> = ({open, setOpen, roleData, viewData}) => {
    const dispatch =useDispatch();
    const [openSuccessDialog, setSuccessDialog] = useState<boolean>(false);
    const {addEmployeeData} = useTypedSelector(state =>  state.employeeRoute.addEmployeeState);

    useEffect(() => {
        if(addEmployeeData) {
            setSuccessDialog(true)
        }
        return () => {
            if(addEmployeeData) {
                dispatch(clearEmployeeAddData());
            }
        }
    }, [addEmployeeData])
    const handleClose = () => {
        setOpen(false);
      };

      const onSubmit = (
        formValues: FormValues,
        { setSubmitting, resetForm  }: FormikHelpers<FormValues>
      ) => {
          dispatch(addEmployeeActionCreator(formValues));
          resetForm();
        setSubmitting(false);
      };

    return (
        <>
        <AlertDialog
          open={openSuccessDialog}
          onClose={() => {
            setSuccessDialog(false);
            setOpen(false);
          }}
          content={{
            closeButton: "Ok",
            dialogContent: "Employee is added successfully.",
            dialogTitle: "Confirmation",
            confirmButton: "Ok"
          }}
        />
        
        <Formik
        initialValues={{
          name: viewData? viewData.firstName: "",
          email: viewData? viewData.email: "",
          code: "",
          role: "",
          gender: "",
          doj: "",
          dob: "",
          salary: ""
        }}
        onSubmit={onSubmit}
        validationSchema={addEmployeeSchema(validationMessage)}
      >
        {formikProps => {
          const { errors, touched, submitForm, setFieldValue, values, resetForm} = formikProps;
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
                    value={values?.name}
                    variant="outlined"
                    fullWidth
                    component={TextField}
                    helperText={touched.name && errors.name}
                  />
                  </Box>
                  <Box ml={2}>
                  <Field
                    id="code"
                    name="code"
                    type="text"
                    label="Code"
                    value={values?.code}
                    variant="outlined"
                    fullWidth
                    component={TextField}
                    helperText={touched.code && errors.code}
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
                  value={values?.email}

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
                <Box>
                <Box  display="flex" flexDirection="row" p={1} m={1}>
                    <Box>
              <Field
                id='dob'
                name='dob'
                type='date'
                label='D.O.B'
                variant='outlined'
                margin='normal'
                fullWidth
                component={TextField}
                helperText={touched.dob && errors.dob}
                InputLabelProps={{
                  shrink: true
                }}
              />
              </Box>
              <Box ml={2}>
              <Field
                id='doj'
                name='doj'
                type='date'
                label='D.O.J'
                variant='outlined'
                margin='normal'
                fullWidth
                component={TextField}
                helperText={touched.doj && errors.doj}
                InputLabelProps={{
                  shrink: true
                }}
              />
              </Box>
            </Box>
                </Box>
                <Box  display="flex" flexDirection="row" p={1} m={1}>
                    <Box>
                <Field
                    id="salary"
                    name="salary"
                    type="text"
                    label="Salary"
                    variant="outlined"
                    fullWidth
                    component={TextField}
                    helperText={touched.salary && errors.salary}
                  />
                  </Box>
                  <Box ml={2}>
                <Field component={RadioGroup} name='gender'>
                    <Box>
                      <FormControlLabel
                        value="Male"
                        control={<Radio color='default' />}
                        label="Male"
                      />
                    <FormControlLabel
                        value="female"
                        control={<Radio color='default' />}
                        label="female"
                      />
                    </Box>
                    
                  {errors && <FormHelperText>{errors.gender}</FormHelperText>}
                </Field>
                </Box>
                </Box>
              </DialogContent>
          <DialogActions>
          <Button
                  onClick={submitForm}
                >
                  SUbmit
                </Button>
            <Button onClick={() => {handleClose(); resetForm()}} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
            </>
          );
        }}
     
          
         </Formik>
         </>
    )
}