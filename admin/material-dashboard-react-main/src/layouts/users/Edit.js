

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
function UserEdit(props) {
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [diachi, setDiachi] = useState('')
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    initUser()
  },[id])
  const initUser = async() => {
      try {
          const param = {
              id:id
          }
        const sResult = await axios.post('users',param)
        console.log(sResult)
        if(sResult.status === 200 && sResult?.data) {
            setUsername(sResult.data.username)
            setPhone(sResult.data.numberphone)
            setEmail(sResult.data.email)
            setDiachi(sResult.data.address)
            setFullname(sResult.data.fullname)
        }else {
            setFullname('')
          setPhone('')
          setUsername('')
          setEmail('')
          setDiachi('')
        }
      } catch (error) {
          
        setFullname('')
        setPhone('')
        setUsername('')
        setEmail('')
        setDiachi('')
      }
  }
  console.log(phone)
  const handleSave = async() => {
    try {
      
      if(!phone) {
        return alert('Vui long nhap thong tin phone')
      }
      const param = {
        username,
        email,
        address: diachi,
        numberphone: phone,
        fullname,
        id: id
      }
      const sResult = await axios.post('users/edit',param)
      console.log(sResult)
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
            <input value={fullname} onChange={evt => setFullname(evt.target.value)} type="text" className="form-control" id="exampleInputEmail1" 
            placeholder="Enter ho va ten" />
          </div>
          <div className="form-group">
            <label >Tai khoan</label>
            <input value={username || ''} type="text" className="form-control"  onChange={ev => setUsername(ev.target.value)} placeholder="Tai khoan" />
          </div>
          <div className="form-group">
            <label >Email</label>
            <input value={email || ''} type="email" onChange={ev => setEmail(ev.target.value)} className="form-control" id="exampleEmail" placeholder="Edit" />
          </div>
          <div className="form-group">
            <label >So dien thoai</label>
            <input value={phone || ''} onChange={ev => setPhone(ev.target.value)} type="text" className="form-control" id="expPhone" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label >Dia chi</label>
            <input value={diachi || ''} type="text" onChange={ev => setDiachi(ev.target.value)} className="form-control" id="exDiachi" placeholder="Dia chi" />
          </div>
          
          
          
        </form>
        <button  onClick={()=>handleSave()} className="btn btn-primary">Chinh sua</button>

        
       
      <Footer />
    </DashboardLayout>
  );
}

export default UserEdit;
