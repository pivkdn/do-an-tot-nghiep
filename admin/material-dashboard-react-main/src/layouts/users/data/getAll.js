
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";


export default function data() {

  return {
    columns: [
      { Header: "Họ và tên", accessor: "fullname", width: "20%", align: "left" },
      { Header: "Tài khoản", accessor: "username", align: "left" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Số điện thoại", accessor: "numberphone", align: "center" },
      { Header: "Địa chỉ", accessor: "address", align: "center" },
      { Header: "Hoạt động", accessor: "action", align: "center" }
    ]
  };
}
