import { useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/payment/data/getAll";
import axios from 'axios';
function Payment() {
  const { columns } = authorsTableData();
  const [arrData, setArrData] = useState([])

  useEffect(() => {
    fetchData()
  },[])
  
  const fetchData = async() => {
    try {
      const sResult = await axios.get('http://localhost:3000/wallets/')
      if(sResult.data) {
        let users = sResult.data.map((item) => {
          return {
            ...item
          }
        })
        setArrData(users)
      } else {
        setArrData([])
      }
    } catch (error) {
      setArrData([])
    }
  }
  console.log(arrData)
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Quản lý thanh toán
                </MDTypography>
              </MDBox>
              <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Họ và tên</th>
      <th scope="col">Số tiền</th>
      <th scope="col">Số điện thoại</th>
      <th scope="col">Địa chỉ banking</th>
      <th scope="col">Số thẻ</th>
    </tr>
  </thead>
  <tbody>
    
    {
      arrData && arrData.length > 0 ? arrData.map((item,index) => {
        return(
          <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{item.fullname}</td>
          <td>{item.money}</td>
          <td>{item.numberphone}</td>
          <td>{item.banking}</td>
          <td>{item.card}</td>
          
        </tr>
        )
      }) : null
    }
  </tbody>
</table>
            </Card>
          </Grid>
        
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Payment;
