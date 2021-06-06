import React from 'react'
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
    Typography
  } from "@material-ui/core";
  import { LoginLayout } from "../../../common/component/layout";
  import { EmailResult } from "../EmailResult";
import {AddEmail} from './addEmail';
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

  interface EmailListProps {
      emailList: EmailResult[]
  }
export const EmailList: React.FC<EmailListProps> = ({emailList}) => {
    const classes = useStyles()
    const [listState, setListState] = React.useState<EmailResult[]>(emailList);
    const [open, setOpen]= React.useState<boolean>(false);

    const handleDelete =(data: EmailResult) => {
        const filterItem = listState.filter((item: EmailResult) => item.serialNo !== data.serialNo)
        setListState(filterItem)
    }
    return (
        <LoginLayout title="Email">
          <>
        <AddEmail open={open} setOpen={setOpen}/>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listState &&
                  listState.length > 0 ?
                  listState.map((item: EmailResult) => (
                    <TableRow key={item.serialNo}>
                      <TableCell component="th" scope="row">
                          {item.serialNo}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.email}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Button onClick={() => handleDelete(item)}>Delete</Button>
                        <Button onClick={() => setOpen(true)}>ADD</Button>
  
                      </TableCell>
                    </TableRow>
                  )): <TableRow><TableCell colSpan={8}><Typography>No data found</Typography></TableCell></TableRow>}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        </>
      </LoginLayout>
    )
}