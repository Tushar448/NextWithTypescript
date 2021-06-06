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
    makeStyles
  } from "@material-ui/core";

  import { LoginLayout } from "../../../common/component/layout";
import {EmployeeListResult} from '../EmployeeListResult';

interface EmployeeListProps {
    list: EmployeeListResult[]
}

const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
export const EmployeeList:React.FC<EmployeeListProps> = ({list}) => {
    const classes= useStyles()
    return(
        <LoginLayout title="Brand">
      <Grid item xs={12}>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {list &&
                list.length > 0 &&
                list.map((item: EmployeeListResult) => (
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
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </LoginLayout>
    )
}