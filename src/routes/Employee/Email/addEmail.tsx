import React, {useState, useEffect} from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box
  } from "@material-ui/core";
  import { Formik, Field, FormikHelpers } from "formik";
  import { TextField } from "formik-material-ui";
  import { useDispatch } from "react-redux";
  import {addEmailSchema} from '../../../common/component/Validation';
import {addEmailActionCreator, clearEmailAddData} from '../redux/action/addEmailAction';
import { AlertDialog } from "../../../common/component/AlertDialog";
import { useTypedSelector } from "../../../common/hook/useTypedSelector";
import { EmailResult } from "../EmailResult";

  interface AddCustomerProps {
    open: boolean;
    setOpen: (data: boolean) => void;
    emailInfo?: EmailResult
    setViewEmailState: (data: EmailResult)=> void
  }

  interface FormValues {
    email: string;
}

const validationMessage = {
    email: "Email is Required",
    invalidEmail: "Please enter the valid email"
  };
export const AddEmail:React.FC<AddCustomerProps> = ({open, setOpen, emailInfo}) => {
    const dispatch =useDispatch();
    const [openSuccessDialog, setSuccessDialog] = useState<boolean>(false);
    const {emailAddData} = useTypedSelector(state =>  state.employeeRoute.addEmailState);

    useEffect(() => {
        if(emailAddData) {
            setSuccessDialog(true)
        }
        return () => {
            if(emailAddData) {
                dispatch(clearEmailAddData());
            }
        }
    }, [emailAddData])
    const handleClose = () => {
        setOpen(false);
      };

      const onSubmit = (
        formValues: FormValues,
        { setSubmitting, resetForm  }: FormikHelpers<FormValues>
      ) => {
          dispatch(addEmailActionCreator(formValues));
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
            dialogContent: "Email is added successfully.",
            dialogTitle: "Confirmation",
            confirmButton: "Ok"
          }}
        />
        
        <Formik
        initialValues={{
          email: emailInfo ? emailInfo.email: ""
        }}
        onSubmit={onSubmit}
        validationSchema={addEmailSchema(validationMessage)}
        enableReinitialize
      >
        {formikProps => {
          const { errors, touched, submitForm, values, resetForm} = formikProps;
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
                <Field
                  id='email'
                  name='email'
                  type='email'
                  label='Email'
                  value={ values.email}

                  variant='outlined'
                  fullWidth
                  component={TextField}
                  helperText={touched.email && errors.email}
                />
              
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