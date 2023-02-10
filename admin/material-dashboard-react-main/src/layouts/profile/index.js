

// @mui icons
import React, {useState, useEffect} from 'react'
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { useNavigate,useParams } from 'react-router-dom';
import axios from '../../redux/api/rootApi'
function Overview(props) {
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [diachi, setDiachi] = useState('')
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    console.log(id)
  },[])
  const handleSave = async() => {
    try {
      console.log('eeeee',fullname)
      console.log('eeeee',username)
      console.log('eeeee',email)
      console.log('eeeee',phone)
      console.log('eeeee',diachi)
      if(!phone) {
        alert('Thong bao', 'Vui long nhap thong tin phone')
      }
      const param = {
        username,
        email,
        address: diachi,
        numberphone: phone,
        fullname

      }
      const sResult = await axios.post('users/register',param)
      if(sResult.data.success) {
        alert('Thành công')
        return navigate('/users')
      } else {
        return alert('Đang có trên hệ thống')
      }
    } catch (error) {
      return alert('Lỗi vui lòng thử lại sau')
    }
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
        
      <form>
          <div className="form-group">
            <label >Ho va ten</label>
            <input onChange={evt => setFullname(evt.target.value)} type="text" className="form-control" id="exampleInputEmail1" 
            placeholder="Enter ho va ten" />
          </div>
          <div className="form-group">
            <label >Tai khoan</label>
            <input type="text" className="form-control"  onChange={ev => setUsername(ev.target.value)} placeholder="Tai khoan" />
          </div>
          <div className="form-group">
            <label >Email</label>
            <input type="email" onChange={ev => setEmail(ev.target.value)} className="form-control" id="exampleEmail" placeholder="Edit" />
          </div>
          <div className="form-group">
            <label >So dien thoai</label>
            <input onChange={ev => setPhone(ev.target.value)} type="text" className="form-control" id="expPhone" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label >Dia chi</label>
            <input type="text" onChange={ev => setDiachi(ev.target.value)} className="form-control" id="exDiachi" placeholder="Dia chi" />
          </div>
          
          
          
        </form>
        <button  onClick={()=>handleSave()} className="btn btn-primary">Them moi</button>

        
       
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
