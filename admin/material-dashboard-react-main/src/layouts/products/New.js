

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
function ProductNew(props) {
  const [product_name, setNameProduct] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImg] = useState('')
  const [noidung, setNoiDung] = useState('')
  const navigate = useNavigate();
  
  
  const handleSave = async() => {
    try {
      
      if(!product_name) {
        return alert('Vui long nhap thong tin product name')
      }
      const param = {
        localize: product_name,
        description: noidung,
        product_name: product_name,
        price: price,
        base_price: price,
        brand: 'TC',
        slug: '',
        active: 1,
        high_res_image: image,
        image: image
      }
      const sResult = await axios.post('products/new',param)
      
      if(sResult.data.success) {
        alert('Thành công')
        return navigate('/products')
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
            <label >Tên sản phẩm</label>
            <input value={product_name} onChange={evt => setNameProduct(evt.target.value)} type="text" className="form-control" id="exampleInputEmail1" 
            placeholder="Tên sản phẩm" />
          </div>
          <div className="form-group">
            <label >Giá</label>
            <input value={price || ''} 
            type="text" className="form-control"  onChange={ev => setPrice(ev.target.value)} placeholder="Giá" />
          </div>
          <div className="form-group">
            <label >Nội dung</label>
            <input value={noidung || ''} type="email" onChange={ev => setNoiDung(ev.target.value)} className="form-control" id="exampleEmail" placeholder="Nội dung" />
          </div>
          <div className="form-group">
            <label >Hình ảnh</label>
            <input value={image || ''} onChange={ev => setImg(ev.target.value)} type="text" className="form-control" id="expPhone" placeholder="Hình ảnh" />
          </div> 
        </form>
        <button  onClick={()=>handleSave()} className="btn btn-primary">Chinh sua</button>

        
       
      <Footer />
    </DashboardLayout>
  );
}

export default ProductNew;
