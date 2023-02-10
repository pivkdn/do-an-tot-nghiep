

export default function data() {

  return {
    columns: [
      { Header: "Họ và tên", accessor: "fullname", width: "20%", align: "left" },
      { Header: "Mặt hàng", accessor: "localize", width: "20%", align: "left" },
      { Header: "Địa chỉ", accessor: "address", align: "left" },
      { Header: "Số tiền", accessor: "payment", align: "center" },
      { Header: "Số điện thoại", accessor: "numberphone", align: "center" }
    ]
  };
}
