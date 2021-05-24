import React, { useState } from "react";
import { Grid, Button, Box } from "@material-ui/core";
import { Formik, Field, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import { useRouter } from "next/router";

import { LoginLayout } from "../../common/component/layout";
import { resetPasswordSchema } from "../../common/component/Validation";
import { AlertDialog } from "../../common/component/AlertDialog";

interface FormValues {
  password: string;
  confirmPassword: string;
}
export const ResetPassword: React.FC = () => {
  const [openSuccessDialog, setSuccessDialog] = useState<boolean>(false);
  const router = useRouter();

  const validationMessage = {
    password: "Password is Required",
    confirmPassword: "Confirm Password is not same"
  };

  const onSubmit = (
    formValues: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setSuccessDialog(true);
    setSubmitting(false);
  };

  return (
    <LoginLayout title="Forgot Password">
      <>
        <AlertDialog
          open={openSuccessDialog}
          onClose={() => {
            setSuccessDialog(false);
            router.push("/login");
          }}
          content={{
            closeButton: "Ok",
            dialogContent: "Mail is send successfully.",
            dialogTitle: "Confirmation",
            confirmButton: "Ok"
          }}
        />
        <Formik
          initialValues={{
            password: "",
            confirmPassword: ""
          }}
          onSubmit={onSubmit}
          validationSchema={resetPasswordSchema(validationMessage)}
          enableReinitialize
        >
          {formikProps => {
            const { errors, touched, submitForm } = formikProps;
            return (
              <>
                <Box>
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
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      label="Change password"
                      variant="outlined"
                      fullWidth
                      component={TextField}
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
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
                    Submit
                  </Button>
                </Grid>
              </>
            );
          }}
        </Formik>
      </>
    </LoginLayout>
  );
};
