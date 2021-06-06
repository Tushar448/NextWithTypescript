import React from 'react';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles,
    Button,
    Typography,
    Box
  } from "@material-ui/core";
  import { useDispatch } from "react-redux";

  import { LoginLayout } from "../../../common/component/layout";
import {EmployeeListResult} from '../EmployeeListResult';
import { useTypedSelector } from "../../../common/hook/useTypedSelector";
import {fetchRoleActionCreator} from '../../SignUp/redux/action/roleAction';

import {AddCustomer} from './addCustomer';

interface EmployeeListProps {
    list: EmployeeListResult[]
}

const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
export const EmployeeList:React.FC<EmployeeListProps> = ({list}) => {
    const classes= useStyles();
    const dispatch =useDispatch();
    const [listState, setListState] = React.useState<EmployeeListResult[]>(list);
    const [open, setOpen]= React.useState<boolean>(false);
    const handleDelete =(data: EmployeeListResult) => {
        const filterItem = listState.filter((item: EmployeeListResult) => item.id !== data.id)
        setListState(filterItem)
    }

    const {roleData} =useTypedSelector(state => state.signUpRoute.roleState);
    
    React.useEffect(() => {
        if(!roleData) {
            dispatch(fetchRoleActionCreator());
        }
    },[])
    return(
        <LoginLayout title="Brand">
      <Grid item xs={12}>
        <Box>
          <Button color="primary"  onClick={() => setOpen(true)}>Add Customer</Button>
        </Box>
        <AddCustomer open={open} setOpen={setOpen} roleData={roleData}/>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>D.O.B</TableCell>
                <TableCell>D.O.J</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listState &&
                listState.length > 0 ?
                listState.map((item: EmployeeListResult) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {`${item.firstName} ${item.lastName}`}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.email}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.dob}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doj}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.salary}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.role}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.gender}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Button onClick={() => handleDelete(item)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                )): <TableRow><TableCell colSpan={8}><Typography>No data found</Typography></TableCell></TableRow>}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </LoginLayout>
    )
}