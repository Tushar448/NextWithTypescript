import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  makeStyles,
  TableRow,
  Paper
} from "@material-ui/core";
import { LoginLayout } from "../../common/component/layout";
import { BrandResult,DataResult } from "./BrandResult";

interface BrandProps {
  data: BrandResult;
}

interface VoucherResult {
  name: string;
  slug: string;
}
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});
export const Brand: React.FC<BrandProps> = props => {
  const classes = useStyles();
  const [voucherData, setVoucherdata] = React.useState<VoucherResult[]>([]);

  const createData = (item: DataResult) => {
    const splitBrand = item.brands_name.split(",");
    const splitVoucher = item.brands_slug.split(",");
    var tableArray: VoucherResult[] = [];
    splitBrand.forEach((brand: string, index: number) => {
      const data: VoucherResult = {
        name: brand,
        slug: splitVoucher[index]
      };

      tableArray.push(data);
    });
    return tableArray;
  };

  React.useEffect(() => {
    const { data } = props.data;
    if (data && data.length > 0) {
      const filterValue = data.filter((item: any) => item.name === "Gifting");
      const value = createData(filterValue[0]);
      setVoucherdata(value);
    }
  }, [props]);
  
  return (
    <LoginLayout title="Brand">
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Brand Name</TableCell>
                <TableCell>Brand Slug</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {voucherData &&
                voucherData.length > 0 &&
                voucherData.map((item: VoucherResult, index: number) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.slug}
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
