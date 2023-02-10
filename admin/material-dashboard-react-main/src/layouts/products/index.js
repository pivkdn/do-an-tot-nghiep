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
import { useNavigate } from 'react-router-dom';
// Data
import axios from '../../redux/api/rootApi';
function Products() {
  const [arrData, setArrData] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetchData()
  },[])
  
  const fetchData = async() => {
    try {
      const sResult = await axios.get('http://localhost:3000/products/s')
      if(sResult.data) {
        let users = sResult.data.map((item) => {
          return {
            ...item,
            
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
  const handleEdit = (id) => {
    return navigate(`/products/edit/${id}`)
  }
  const handleNew = () => {
    return navigate('/products/new')
  }
  const handleDelete = async(id) => {
    try {
      const param = {
        id
      }
      const sResult = await axios.post('products/delete',param)
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
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <button onClick={() => handleNew()} type="button" className="btn btn-success">NEW</button>
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
                  Quản lý đơn hàng
                </MDTypography>
              </MDBox>
              <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tên sản phẩm</th>
      <th scope="col">Giá</th>
      <th scope="col">Ngày tạo</th>
     
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
      arrData && arrData.length > 0 ? arrData.map((item,index) => {
        return(
          <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{item.product_name}</td>
          <td>{item.base_price}</td>
          <td>{item.created_at}</td>
         
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

export default Products;
