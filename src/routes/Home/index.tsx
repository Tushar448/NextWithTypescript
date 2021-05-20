import React from "react";
import {
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  makeStyles,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { LoginLayout } from "../../common/component/layout";
import { getHomeCategoryInfo } from "./redux/action/homeCategory";
import { useTypedSelector } from "../../common/hook/useTypedSelector";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setdata] = React.useState("");

  const dispatch = useDispatch();
  const { homeCategoryData } = useTypedSelector(
    state => state.homeRoute.homeCategoryState
  );
  React.useEffect(() => {
    dispatch(getHomeCategoryInfo());
  }, []);

  const getDetails = (data: any) => {
    setOpen(true);
    setdata(data.title);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <LoginLayout title="Login">
      <Grid item xs={12}>
        <Dialog
          onClose={handleClose}
          aria-labelledby="simple-dialog-title"
          open={open}
        >
          <DialogTitle id="alert-dialog-title">{"Detail"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {data}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Link</TableCell>
                <TableCell>Creation Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {homeCategoryData &&
                homeCategoryData.items &&
                homeCategoryData.items.length > 0 &&
                homeCategoryData.items.map((item: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {item.owner.display_name}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() => getDetails(item)}
                    >
                      {item.title}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.creation_date}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </LoginLayout>
  );
};
