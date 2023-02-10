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
import { useNavigate } from 'react-router-dom';
// Data
import authorsTableData from "layouts/users/data/getAll";
import axios from '../../redux/api/rootApi';
function Users() {
  const { columns } = authorsTableData();
  const [arrData, setArrData] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetchData()
  },[])
  const handleDelete = async(id) => {
    try {
      const param = {
        id
      }
      const sResult = await axios.post('users/delete',param)
      if(sResult.data.success) {
        return alert('Xoa thanh cong')
      } else {
        return alert('Xoa khong thanh cong')
      }
    } catch (error) {
      alert('Xoa khong thanh cong')
    } finally {
      fetchData()
    }

  }
  
  
  const fetchData = async() => {
    try {
      const sResult = await axios.get('http://localhost:3000/users/')
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
  const handleNew = () => {
    return navigate(`/users/new`)
  }
  const handleEdit = (id) => {
    return navigate(`/users/edit/${id}`)
  }
 
  return (
    <DashboardLayout>
      
      <DashboardNavbar />
      <button onClick={() => handleNew()} type="button" className="btn btn-success">New</button>
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
                  Quản lý tài khoản 
                </MDTypography>
              </MDBox>
              <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ho va ten</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Dia Chi</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
      arrData && arrData.length > 0 ? arrData.map((item,index) => {
        return(
          <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{item.fullname}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item.numberphone}</td>
          <td>{item.address}</td>
          <td>
          <button onClick={() => handleEdit(item.id)} type="button" className="btn btn-success">EDIT</button>
          <button onClick={() => handleDelete(item.id)} type="button" className="btn btn-danger">DELETE</button>
          </td>
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

export default Users;
